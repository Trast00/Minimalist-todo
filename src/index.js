import './style.css';
import ListTasks from './modules/ListTasks.js';

/* List Task */
const listTask = new ListTasks(); // [new Task('Task 1', false)];
/* Sort List Of task */

/* Display List */
/*
listTask.forEach((task) => {
  const ulListTask = document.getElementById('list-task');
  const liTask = document.createElement('li');
  liTask.classList.add('task');

  const divTaskContent = document.createElement('div');
  divTaskContent.classList.add('task-content');
  const checkBok = document.createElement('input');
  checkBok.type = 'checkbox';

  const inTaskDescription = document.createElement('input');
  inTaskDescription.classList.add('task-description');
  inTaskDescription.value = task.description;
  inTaskDescription.type = 'text';

  /* Display element */
/* divTaskContent.append(checkBok);
  divTaskContent.append(inTaskDescription);

  const iMenu = document.createElement('i');
  iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');

  liTask.append(divTaskContent);
  liTask.append(iMenu);

  ulListTask.append(liTask);
});
*/

/* On submit the input */
const form = document.forms[0];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.newtask.value.length !== 0) {
    listTask.add(form.newtask.value);
    form.newtask.value = '';
  }
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
      listTask.add(task.description);
    });
  }
});
