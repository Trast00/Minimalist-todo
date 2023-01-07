import './style.css';
import ListTasks from './modules/ListTasks.js';

/* List Task */
const listTask = new ListTasks();

/* On submit the input */
const form = document.forms[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.newtask.value.trim().length !== 0) {
    listTask.add(form.newtask.value);
  }
  form.newtask.value = '';
});

const btnClearAll = document.getElementById('btn-clear-task');
btnClearAll.addEventListener('click', () => {
  listTask.clearAll();
});

/* Save changes in Local Storage */
window.addEventListener('beforeunload', () => {
  const savedData = { currentDescription: form.newtask.value, list: listTask.list };
  window.localStorage.setItem('SavedData', JSON.stringify(savedData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(window.localStorage.getItem('SavedData'));

  if (savedData.currentDescription != null) {
    form.newtask.value = savedData.currentDescription;
  }
  if (savedData.list != null) {
    savedData.list.forEach((task) => {
      listTask.add(task.description, task.completed, task.index);
    });
  }
});
