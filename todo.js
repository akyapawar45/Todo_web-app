const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const task = todoInput.value.trim();
  
  if (task !== '') {
    createTodoItem(task);
    todoInput.value = '';
  }
});

function createTodoItem(task) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const label = document.createElement('label');
  label.textContent = task;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
  
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  
  todoList.appendChild(li);
}
