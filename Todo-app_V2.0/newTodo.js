const formName =document.querySelector('.formName');
const formDesc =document.querySelector('.formDescription');
const formDate =document.querySelector('.formDate');
const saveBtn =document.querySelector('.saveBtn');
const formStart =document.querySelector('.formStart')
// const saveBtn=document.getElementById('saveBtn');
let allTasks=[];


saveBtn.addEventListener('click',()=>{
    
const taskName=formName.value;
const taskDesc =formDesc.value;
const taskDate =formDate.value;
const taskStart =formStart.value;

if (!taskName=='' ) {
   // allTasks.push(taskName,taskDesc,taskDate);
// localStorage.setItem('allTasks',JSON.stringify(allTasks));
saveTodo(taskName,taskDesc,taskStart,taskDate);
window.location.href='todo.html';
// console.log(taskName,taskDesc,taskDate);
console.log(allTasks); 
}else{
    alert("please input valid task")
}


});


function saveTodo(taskName,taskDesc,taskStart,taskDate){
const task={taskName,taskDesc,taskStart,taskDate};
const tasks =JSON.parse(localStorage.getItem('tasks')) || [];

tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));

}