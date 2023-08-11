const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function clearInput() {
    taskInput.value = '';
}

function addTask(_taskDescription, _callback) {
    setTimeout(() => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = _taskDescription;

        taskList.appendChild(listItem);
        _callback()
    }, 500)
}

addTaskBtn.addEventListener('click', function(){
    const taskDescription = taskInput.value.trim();
    // console.log(taskDescription);
    if(taskDescription !== '') {
        addTask(taskDescription, clearInput);
    }
});

