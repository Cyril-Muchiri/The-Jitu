let alltasks = [];

// get tasks if exists
if (localStorage.getItem('tasks')) {
  alltasks = JSON.parse(localStorage.getItem('tasks'));
}

let form = document.querySelector('.inputform');
let newtodo = document.getElementById('new-todo-input');
let checkbox = document.querySelector('#checkBox');

// New variables
let sortAll = document.querySelector('.all');
let sortActive = document.querySelector('.active');
let sortCompleted = document.querySelector('.completed');
let clear = document.querySelector('.clear_btn');

checkbox.addEventListener('click', () => {
  
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (newtodo.value !== '') {
    alltasks.push({
      task: newtodo.value,
      checked: checkbox.checked,
    });

    newtodo.value = '';
    checkbox.checked = false;

    renderTasks();

    
    localStorage.setItem('tasks', JSON.stringify(alltasks));
  }
});

function renderTasks(tasks = alltasks) {
  let taskItems = document.querySelectorAll('.lower-inner .taskitem');

  taskItems.forEach((el) => el.remove());

  tasks.forEach(({ task, checked }, index) => {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'itemcheckbox';
    checkbox.checked = checked;

    let taskContainer = document.createElement('div');
    taskContainer.className = 'singletask';
    taskContainer.textContent = task;
    taskContainer.style.textDecoration = checked ? 'line-through' : 'none';

    checkbox.addEventListener('click', () => {
      taskContainer.style.textDecoration = checkbox.checked ? 'line-through' : 'none';

      tasks[index].checked = checkbox.checked;
      localStorage.setItem('tasks', JSON.stringify(alltasks));
    });

    let taskitem = document.createElement('div');
    taskitem.className = 'taskitem';

    taskitem.appendChild(checkbox);
    taskitem.appendChild(taskContainer);

    let alltasksContainer = document.querySelector('.lower-inner');
    alltasksContainer.appendChild(taskitem);
  });

  updateRemainingCount();
}

function updateRemainingCount() {
  let remain = document.querySelector('.remain');
  let remainingTasks = alltasks.filter((task) => !task.checked);
  remain.textContent = `${remainingTasks.length} remaining`;
}

sortAll.addEventListener('click', () => {
  renderTasks();
});

sortActive.addEventListener('click', () => {
  let activeTasks = alltasks.filter((task) => !task.checked);
  renderTasks(activeTasks);
});

sortCompleted.addEventListener('click', () => {
  let completedTasks = alltasks.filter((task) => task.checked);
  renderTasks(completedTasks);
});

clear.addEventListener('click', () => {
  alltasks = alltasks.filter((task) => !task.checked);
  renderTasks();

  localStorage.setItem('tasks', JSON.stringify(alltasks));
});

function clearScreen() {
  alltasks = [];
  renderTasks();
  localStorage.removeItem('tasks');
}

clearScreen();






