
const taskSection = document.querySelector('.taskSection');
const addButton = document.querySelector('.addButton');
const selectAll = document.querySelector('.allTasks');
const selectComplete = document.querySelector('.completedTasks');

let allTasks = [];


const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
allTasks = tasksFromLocalStorage;

function renderTasks() {
    taskSection.innerHTML = '';

    const showCompleted = selectComplete.checked; 

    allTasks.forEach((task, index) => {
        
        if (showCompleted && !task.completed) {
            return;
        }

        const taskElement = createTaskElement(task, index);
        taskSection.appendChild(taskElement);
    });
}
function showCompleteTasks() {
    taskSection.innerHTML = '';

    const showCompleted = selectComplete.checked;

    allTasks.forEach((task, index) => {
        if (!showCompleted && !task.completed) {
            return;
        }

        if (!showCompleted && !task.completed) {
            return;
        }

        const taskElement = createTaskElement(task, index);
        taskSection.appendChild(taskElement);
    });
}


function createTaskElement(task, index) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerText = task.completed ? '✔' : '✖';
    checkButton.addEventListener('click', () => {
        toggleTaskStatus(index);
    });

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const taskNameElement = document.createElement('h5');
    taskNameElement.innerText = task.taskName;

    const taskDescElement = document.createElement('p');
    taskDescElement.innerText = task.taskDesc;

    const taskDateElement = document.createElement('p');
    taskDateElement.innerText = task.taskDate;

    const delDiv=document.createElement('div');
    delDiv.classList.add('deleteDiv');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    delDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        deleteTask(index);
    });

    taskDetails.appendChild(taskNameElement);
    taskDetails.appendChild(taskDescElement);
    taskDetails.appendChild(taskDateElement);

    taskElement.appendChild(checkButton);
    taskElement.appendChild(taskDetails);
    taskElement.appendChild(delDiv);

    return taskElement;
}



function toggleTaskStatus(index) {
    allTasks[index].completed = !allTasks[index].completed;
    saveTasksToLocalStorage();
    renderTasks();
}

function deleteTask(index) {
    allTasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
}


// renderTasks();


addButton.addEventListener('click', () => {
    // allTasks = [];
    // localStorage.removeItem('tasks');
    // renderTasks();
    window.location.href='newTodo.html';
});


selectAll.addEventListener('click', () => {

    renderTasks();
    console.log('clicked');
});

selectComplete.addEventListener('click', () => {
    console.log('clicked!!');
    showCompleteTasks();
});
