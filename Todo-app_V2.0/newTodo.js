const formName =document.querySelector('.formName');
const formDesc =document.querySelector('.formDescription');
const formDate =document.querySelector('.formDate');
const saveBtn =document.querySelector('.saveBtn');
// const saveBtn=document.getElementById('saveBtn');
let allTasks=[];


saveBtn.addEventListener('click',()=>{
    
const taskName=formName.value;
const taskDesc =formDesc.value;
const taskDate =formDate.value;

// allTasks.push(taskName,taskDesc,taskDate);
// localStorage.setItem('allTasks',JSON.stringify(allTasks));
saveTodo(taskName,taskDesc,taskDate);
window.location.href='todo.html';
// console.log(taskName,taskDesc,taskDate);
console.log(allTasks);
});


function saveTodo(taskName,taskDesc,taskDate){
const task={taskName,taskDesc,taskDate};
const tasks =JSON.parse(localStorage.getItem('tasks')) || [];

tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));

}