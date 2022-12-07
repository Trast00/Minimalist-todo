import Task from ".Task.js"

export default class ListTasks {
  constructor(){
    this.list = []
  }

  add = (description) => {
    const task = new Task(this.list.length, description)
    this.list.push(task)
    this.display(task)
  }

  /* Generate / Update task dynamicaly */
  display = (task) => {
    let currentID = task.index

    const ulListTask = document.getElementById('list-task')
    const liTask = document.createElement('li')
    liTask.classList.add('task')
    liTask.id = currentID

    const divTaskContent = document.createElement('div')
    divTaskContent.classList.add('task-content')
    const checkBok = document.createElement('input')
    checkBok.type = "checkbox"
    checkBok.name = currentID

    const inTaskDescription = document.createElement('input')
    inTaskDescription.classList.add('task-description')
    inTaskDescription.value = task.description
    inTaskDescription.type = "text"

    /* Update */
    checkBok.addEventListener('change', (event) => {
      if(event.currentTarget.checked){
        event.currentTarget.nextSibling.style.textDecoration = "line-through"
        this.list[currentID].completed = true
      }
      else {
        event.currentTarget.nextSibling.style.textDecoration = "none"
        this.list[currentID].completed = false
      }
    })

    inTaskDescription.addEventListener("focus", () => {
      document.getElementById(currentID).style.backgroundColor = "blue"
    })

    /* Update value when stop focus */
    inTaskDescription.addEventListener("focusout", () => {
      let litask = document.getElementById(currentID)
      litask.style.backgroundColor = "white"
      this.list[currentID].description = litask.querySelector('.task-description').value
    })
  

    /* Display element */
    divTaskContent.append(checkBok)
    divTaskContent.append(inTaskDescription)

    const iMenu = document.createElement('i')
    iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical')

    liTask.append(divTaskContent)
    liTask.append(iMenu)

    ulListTask.append(liTask)
  }


  delete = (task) => {
    this.list = this.list.splice(0, task.index) + this.list.splice(task.index, task.length-1)
    //document.getElementById(task.index)
  }

}