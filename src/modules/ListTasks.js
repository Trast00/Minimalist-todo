import Task from './Task.js';

export default class ListTasks {
  constructor() {
    this.list = [];
  }

  add = (description) => {
    const task = new Task(description, false, this.list.length + 1);
    this.list.push(task);
    this.display(task);
  }

  /* Generate / Update task dynamicaly */
  display = (task) => {
    const currentID = task.index;

    const ulListTask = document.getElementById('list-task');
    const liTask = document.createElement('li');
    liTask.classList.add('task');
    liTask.id = currentID;

    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('task-content');
    const checkBok = document.createElement('input');
    checkBok.type = 'checkbox';
    checkBok.name = currentID;

    const inTaskDescription = document.createElement('input');
    inTaskDescription.classList.add('task-description');
    inTaskDescription.value = task.description;
    inTaskDescription.type = 'text';
    inTaskDescription.id = `description-${currentID}`;

    /* Update */
    checkBok.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        event.currentTarget.nextSibling.style.textDecoration = 'line-through';
        this.list[currentID - 1].completed = true;
      } else {
        event.currentTarget.nextSibling.style.textDecoration = 'none';
        this.list[currentID - 1].completed = false;
      }
    });

    inTaskDescription.addEventListener('focus', () => {
      document.getElementById(currentID).style.backgroundColor = 'rgb(156, 156, 255)';

      const iMenu = document.getElementById(`icon-menu-${currentID}`);
      const iDelete = document.getElementById(`icon-remove-${currentID}`);
      iDelete.classList.remove('hidden');
      iMenu.classList.add('hidden');
    });

    /* Update value when stop focus */
    inTaskDescription.addEventListener('focusout', (event) => {
      const litask = document.getElementById(currentID);
      litask.style.backgroundColor = 'white';
      this.list[currentID - 1].description = event.currentTarget.value;
      const iMenu = document.getElementById(`icon-menu-${currentID}`);
      const iDelete = document.getElementById(`icon-remove-${currentID}`);

      /* Set time out before hide the iDelete:
      to make sure the click event always be tiggered before focusout */
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
    iMenu.id = `icon-menu-${currentID}`;

    const iDelete = document.createElement('i');
    iDelete.classList.add('fa-solid', 'fa-trash', 'hidden');
    iDelete.id = `icon-remove-${currentID}`;
    iDelete.addEventListener('click', () => {
      this.delete(currentID);
    });

    liTask.append(divTaskContent);
    liTask.append(iDelete);
    liTask.append(iMenu);

    ulListTask.append(liTask);
  }

  delete = (indexDeleted) => {
    this.list = this.list.filter((task) => task.index !== this.list[indexDeleted - 1].index);
    document.getElementById(indexDeleted).remove();
    this.updateIndexs();
  }

  updateIndexs = () => {
    let index = 1;
    this.list.forEach((task) => {
      task.index = index;
      index += 1;
    });
    console.log(this.list);
  }
}