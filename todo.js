const todoForm = document.querySelector(".js-toDoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-toDoList");

const TODO_LIST = "toDos";

let toDos = [];



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
    delBtn.addEventListener("click",deleteToDo);
    delBtn.classList.add("w3-button");
    delBtn.classList.add("w3-large");
    delBtn.classList.add("w3-circle");
    delBtn.classList.add("w3-white");
    
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

const deleteToDo = event =>{
    const btn = event.target;
    const li = btn.parentNode;
   
    todoList.removeChild(li);
    const cleanToDos=toDos.filter(value =>{ 
        return parseInt(li.id)!==value.id;
    })
    toDos = cleanToDos;
    saveToDos();
}


const todoInit = () => {
    loadToDo();
    todoForm.addEventListener("submit", todoHandleSubmit);
}

