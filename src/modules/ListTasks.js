import Task from './Task.js';

export default class ListTasks {
  constructor() {
    this.list = [];

    this.dragStartID = -1
    this.dragEndID = -1
  }

  add = (description, completed = false, index = this.list.length + 1) => {
    const task = new Task(description, completed, index);
    this.list.push(task);
    this.display(task);
  }

  /* Generate / Update task dynamicaly */
  display = (task) => {
    const ulListTask = document.getElementById('list-task');
    const liTask = document.createElement('li');
    liTask.classList.add('task');
    liTask.id = task.index;

    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('align-center', 'task-content');
    const checkBok = document.createElement('input');
    checkBok.type = 'checkbox';
    checkBok.name = task.index;

    const inTaskDescription = document.createElement('input');
    inTaskDescription.classList.add('task-description');
    inTaskDescription.value = task.description;
    inTaskDescription.type = 'text';

    /* Update */
    checkBok.addEventListener('change', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      if (event.currentTarget.checked) {
        event.currentTarget.nextSibling.style.textDecoration = 'line-through';
        this.list[id - 1].completed = true;
      } else {
        event.currentTarget.nextSibling.style.textDecoration = 'none';
        this.list[id - 1].completed = false;
      }
    });

    if (task.completed) {
      checkBok.click();
      inTaskDescription.style.textDecoration = 'line-through';
    }

    inTaskDescription.addEventListener('focus', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      document.getElementById(id).style.backgroundColor = 'rgb(156, 156, 255)';
      const iDelete = event.currentTarget.parentElement.nextSibling;
      const iMenu = event.currentTarget.parentElement.nextSibling.nextSibling;
      iDelete.classList.remove('hidden');
      iMenu.classList.add('hidden');
    });

    /* Update value when stop focus */
    inTaskDescription.addEventListener('focusout', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      const litask = document.getElementById(id);
      litask.style.backgroundColor = 'white';

      this.list[id - 1].description = event.currentTarget.value;
      const iDelete = event.currentTarget.parentElement.nextSibling;
      const iMenu = event.currentTarget.parentElement.nextSibling.nextSibling;

      /* Set time out before hide the iDelete:
      to make sure the click event always be tiggered before focusout */
      document.querySelectorAll('.movie').length
      setTimeout(() => {
        iMenu.classList.remove('hidden');
        iDelete.classList.add('hidden');
      }, 200);
    });

    /* Display element */
    divTaskContent.append(checkBok);
    divTaskContent.append(inTaskDescription);

    const iMenu = document.createElement('i');
    iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');

    const iDelete = document.createElement('i');
    iDelete.classList.add('fa-solid', 'fa-trash', 'hidden');
    iDelete.addEventListener('click', (event) => {
      const { id } = event.currentTarget.parentElement;
      this.delete(id); // id = index + 1
    });

    liTask.append(divTaskContent);
    liTask.append(iDelete);
    liTask.append(iMenu);

    this.addEventsDragAndDrop(liTask)

    ulListTask.append(liTask);
  }

  delete = (idDeleted) => {
    this.list = this.list.filter((task) => task.index !== this.list[idDeleted - 1].index);
    document.getElementById(idDeleted).remove();
    this.updateIndexs();
  }

  updateIndexs = () => {
    let index = 1;
    this.list.forEach((task) => {
      const liTask = document.getElementById(task.index);
      liTask.id = index;

      task.index = index;
      index += 1;
    });
  }

  clearAll = () => {
    this.list.forEach((task) => {
      if (task.completed) {
        document.getElementById(task.index).remove();
      }
    });

    this.list = this.list.filter((task) => !task.completed);
    this.updateIndexs();
  }

  addEventsDragAndDrop = (element) => {
    element.draggable = "true"
    element.addEventListener('dragstart', (event) => {
      this.dragStartID = event.currentTarget.id
      event.currentTarget.style.backgroundColor = "rgb(156, 156, 255)"
    }, false)
    element.addEventListener('dragend', () => {
      /* Supprimer element draged task */
      const dragedTask = this.list[parseInt(this.dragStartID)-1]
      this.list = this.list.filter(task => {
        if(task.index===dragedTask.index){
          return
        }
        return task
      })
      console.log(this.list)
      /* Add draged task to his new position */
      this.list.splice(parseInt(this.dragEndID)-1, 0, dragedTask)
      
      this.updateIndexs()
      const list = document.getElementById('list-task')
      list.innerHTML = ''
      this.list.forEach(task => {
        this.display(task)
      })
    }, false)
    //element.addEventListener('dragenter', () => {}, false)
    element.addEventListener('dragleave', (event) => {
      event.currentTarget.style.backgroundColor = "#fff"
      event.preventDefault()
    }, false)

    element.addEventListener('dragover', (event) => {
      event.currentTarget.style.backgroundColor = "#ebebeb"
      this.dragEndID = event.currentTarget.id
      event.preventDefault()
    })
  }
}