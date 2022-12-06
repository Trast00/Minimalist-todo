import "./style.css"
import ListTasks from "./modules/ListTasks.js"

/* List Task*/
const listTask = new ListTasks()

/* On submit the input */
const form = document.forms[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  if(form.newtask.value.length !==0 ){
    listTask.add(form.newtask.value)
    form.newtask.value = ""
  }
})