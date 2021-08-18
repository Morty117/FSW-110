// Selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){
    event.preventDefault();

    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';
}

function deleteCheck(e){
    var item = e.target;

    if(item.classList[0] === 'trash-btn') {
        var todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function (){
            todo.remove();
        })
    }

    if (item.classList[0] === 'complete-btn') {
        var todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}