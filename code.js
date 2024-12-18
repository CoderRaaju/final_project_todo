
const form = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskName = document.getElementById('task-name').value;
  const taskDate = document.getElementById('task-date').value;

  addTask(taskName, taskDate);
});


function addTask(name, date) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    ${name} - ${date}
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(taskItem);
}


function deleteTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

function archiveTask(button) {
    const taskItem = button.parentElement;
    const archivedList = document.getElementById('archived-list');
    archivedList.appendChild(taskItem);
    button.remove(); 
  }
  
  
  function addTask(name, date) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      ${name} - ${date}
      <button onclick="deleteTask(this)">Delete</button>
      <button onclick="archiveTask(this)">Archive</button>
    `;
    taskList.appendChild(taskItem);
  }

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.add('removed');
    setTimeout(() => {
      taskItem.remove();
    }, 500); 
  }
  let lastDeletedTask = null;

  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    lastDeletedTask = taskItem.cloneNode(true); 
    taskItem.classList.add('removed');
    setTimeout(() => {
      taskItem.remove();
    }, 500);
  
  
    const undoButton = document.createElement('button');
    undoButton.textContent = 'Undo';
    undoButton.onclick = () => undoDelete();
    document.body.appendChild(undoButton);
  }
  
  
  function undoDelete() {
    if (lastDeletedTask) {
      taskList.appendChild(lastDeletedTask);
      lastDeletedTask = null;
    }
    document.querySelector('button:contains("Undo")').remove(); // 
  }
  let timer;
  let timeRemaining = 5 * 60; // 
  
  function startPomodoro() {
    if (timer) return; 
    timer = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        timer = null;
        alert('Pomodoro session complete!');
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer-display').textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
        
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function () {
  const query = searchBar.value.toLowerCase();
  const tasks = document.querySelectorAll('#task-list li');

  tasks.forEach((task) => {
    const taskText = task.textContent.toLowerCase();
    task.style.display = taskText.includes(query) ? 'block' : 'none';
  });
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});


document.body.classList.add('light-mode');
