document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = '';

    const editBtn = taskItem.querySelector('.edit-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => editTask(taskItem));
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));
}

function editTask(taskItem) {
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit Task:', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').innerText = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskItem.remove();
    }
}
