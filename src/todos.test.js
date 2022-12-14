const ListTasks = require('./utils')
document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <meta content="0; url=https://trast00.github.io/Minimalist-todo/dist/index.html">
  <script src="https://kit.fontawesome.com/a1c06e2fcd.js" crossorigin="anonymous"></script>
  <title>Minismalist To Do List</title>
</head>
<body>
  <main>
    <div id="title2" class="title">
      <h1>Today's To Do</h1>
      <i class="fa-solid fa-repeat"></i>
    </div>
    <form>
      <label for="newtask">
        <input class="addtask" type="text" placeholder="Add to your list..." name="newtask" id="newtask">
      </label>
    </form>
    <ul id="list-task">
    </ul>
    <button id="btn-clear-task">Clear all completed</button>
  </main>
</body>
</html>`;


describe('Add Task Test ', () => {
  const list = new ListTasks()
  test('Add normal task', () => {
    list.add('task 1')
    expect(list.list).toHaveLength(1)
  })

  test('Add second task', () => {
    list.add('task 2')
    expect(list.list).toHaveLength(2)
  })

  test('task are added to the DOM', () => {
    list.add('task 3')
    const listUl = document.querySelectorAll('.task');
    expect(listUl).toHaveLength(3)
  })
})

describe('Delete todo task', () => {
  test('should delete one todo task test1', () => {
    const list = new ListTasks();
    list.add('lorem ipsum')
    list.delete(1)
    expect(list.list).toHaveLength(0)
  });
  
  test('should delete one todo task test2', () => {
    const list = new ListTasks();
    list.add('lorem ipsum1')
    list.add('lorem ipsum2')
    list.add('lorem ipsum3')
    list.delete(2)
    expect(list.list[list.list.length-1].description).toBe('lorem ipsum3');
  });
  
  test('should delete one todo task test3', () => {
    const list = new ListTasks();
    list.add('lorem ipsum1')
    list.add('lorem ipsum2')
    list.add('lorem ipsum3')
    list.delete(3)
    list.add("lorem ipsum4")
    expect(list.list[list.list.length-1]).toEqual({description: "lorem ipsum4", completed: false, index: 3});
  });

  test('should delete one todo task test3', () => {
    const list = new ListTasks();
    const uIList = document.querySelector('#list-task');
    uIList.innerHTML = '';
    
    list.add('lorem ipsum1')
    list.add('lorem ipsum2')
    list.add('lorem ipsum3')
    list.delete(3)
    const uI = uIList.querySelectorAll('.task')
    expect(uI).toHaveLength(2);
  });

})

