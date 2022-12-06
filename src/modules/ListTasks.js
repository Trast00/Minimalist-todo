import Task from "./Task.js"

export default class ListTasks {
  constructor(){
    this.list = []
  }

  add = (description) => {
    const task = new Task(this.list.length, description)
    this.list.push(task)
    this.display(task)
  }

  /* Generate task dynamicaly */
  display = (task) => {
    const ulListTask = document.getElementById('list-task')
    const liTask = document.createElement('li')
    liTask.classList.add('task')

    const divTaskContent = document.createElement('div')
    divTaskContent.classList.add('task-content')
    const checkBok = document.createElement('input')
    checkBok.type = "checkbox"
    checkBok.name = task.order
    checkBok.id = task.order
    const label = document.createElement('label')
    label.for = task.order
    label.textContent = task.description
    divTaskContent.append(checkBok)
    divTaskContent.append(label)

    const iMenu = document.createElement('i')
    iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical')

    liTask.append(divTaskContent)
    liTask.append(iMenu)

    ulListTask.append(liTask)
  }


  delete = (task) => {
    this.list = this.list.splice(0, task.order) + this.list.splice(task.order, task.length-1)
    //document.getElementById(task.order)
  }

}