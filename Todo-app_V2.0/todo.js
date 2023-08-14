const main =document.querySelector('.main');

const taskFromLocalStorage = JSON.parse(localStorage.getItem('task'));
const taskSection = document.querySelector('.taskSection');
const addButton = document.querySelector('.addButton');
const selectAll = document.querySelector('.allTasks');
const selectComplete = document.querySelector('.completedTasks');
const toogleView =document.querySelector('.view');




// const taskDate = new Date(task.taskDate);
// const taskStart = new Date(task.taskStart);

// const timeDifferenceInMilliseconds = taskDate - taskStart;


// const hours = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
// const minutes = Math.floor((timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
// const seconds = Math.floor((timeDifferenceInMilliseconds % (1000 * 60)) / 1000);

let allTasks = [];

toogleView.addEventListener('click',()=>{
    console.log('clicked');
main.classList.toggle('darkmode');

});


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
        // if (!showCompleted && !task.completed) {
        //     return;
        // }

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
    // taskDateElement.innerText = task.taskDate - task.taskStart;
    
   

// Assuming task.taskDate and task.taskStart are date strings in the format "YYYY-MM-DD HH:MM:SS"
const taskDate = new Date(task.taskDate);
const taskStart = new Date(task.taskStart);

// Calculate the time difference in milliseconds
const timeDifferenceInMilliseconds = taskDate - taskStart;

//convet time
const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
const hours = Math.floor(timeDifferenceInSeconds / 3600);
let days =Math.floor(hours/24);
const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);
const seconds = timeDifferenceInSeconds % 60;


let formattedTimeDifference = `${days} days remaining`;
const deadlinedTask = 'Task overdue by ${days}  days';
const earlyTask ='Task completed early by ${days} days'

const showCompleted = selectComplete.checked;

// if (showCompleted && days>1) {
//      formattedTimeDifference = `Task done early by ${days} days`;
//     taskDateElement.innerText=formattedTimeDifference;

// } else if(!showCompleted && days<2) {
//     formattedTimeDifference = `Overdue by ${days} day`;
//     taskDateElement.innerText=formattedTimeDifference;

// }else{
//     taskDateElement.innerText = formattedTimeDifference;
// }

taskDateElement.innerText = formattedTimeDifference;



    // taskDateElement.innerText = `Time difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    const delDiv=document.createElement('div');
    delDiv.classList.add('deleteDiv');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    delDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        deleteTask(index);
    });
    const breakerDiv =document.createElement('div');
    breakerDiv.classList.add('breakerDiv');

    const breaker = document.createElement('hr');
    breaker.style.width="30vw"
    

    taskDetails.appendChild(taskNameElement);
    taskDetails.appendChild(taskDescElement);

    taskDetails.appendChild(taskDateElement);

    taskElement.appendChild(checkButton);
    taskElement.appendChild(taskDetails);
    // taskDateElement.appendChild(breakerDiv);
   
    taskElement.appendChild(delDiv);
    breakerDiv.appendChild(breaker);
    // taskElement.appendChild(breakerDiv);

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

