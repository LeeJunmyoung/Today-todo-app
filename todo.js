const todoForm = document.querySelector(".js-toDoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-toDoList");

const TODO_LIST = "toDos";

const toDos = [];



const loadToDo = () => {
    const loadToDos = localStorage.getItem(TODO_LIST);
    if (loadToDos !== null) {
        const jsonLoadToDos = JSON.parse(loadToDos);
        jsonLoadToDos.forEach(value => {
            paintTodo(value.value);
        });
    }
}



const todoHandleSubmit = event => {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

const paintTodo = value => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    span.innerText = value;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const toDoObj = {
        value: value,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

const saveToDos = () => {
    const jsonToDos = JSON.stringify(toDos);
    localStorage.setItem(TODO_LIST, jsonToDos);
}

const todoInit = () => {
    loadToDo();
    todoForm.addEventListener("submit", todoHandleSubmit);
}

todoInit();