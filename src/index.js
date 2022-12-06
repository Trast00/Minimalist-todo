import './style.css';
import Task from './modules/Task.js';
// import ListTasks from "./modules/ListTasks.js"

/* List Task */
const listTask = [new Task(1, 'Task 1', false),
  new Task(2, 'Task 2', false),
  new Task(3, 'Task 3', false),
  new Task(4, 'Task 4', false),
  new Task(5, 'Task 5', false),
];
/* Sort List Of task */

/* Display List */
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
  divTaskContent.append(checkBok);
  divTaskContent.append(inTaskDescription);

  const iMenu = document.createElement('i');
  iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');

  liTask.append(divTaskContent);
  liTask.append(iMenu);

  ulListTask.append(liTask);
});
