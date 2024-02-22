let todoItemsContainer = document.getElementById("todoitemscontainer");
let addtodobutton = document.getElementById("addtodobutton");

let todoList = [
    {
        text : "learn HTML",
        uniqueNo : 1
    },
    {
        text : "learn CSS",
        uniqueNo : 2
    },
    {
        text : "learn Javascript",
        uniqueNo : 3
    },

];


function createAndAppendTodo(eachtodo)
{

    let checkboxId = "checkbox" + eachtodo.uniqueNo;
    let labelId = "label" + eachtodo.uniqueNo;
    let todoId = "todo" + eachtodo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex", "flex-row","mt-42","mb-42");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type="checkbox"
    inputElement.id=checkboxId;
    inputElement.classList.add("checkbox-input",);
    todoElement.appendChild(inputElement);
    inputElement.onclick=function (){
        onTodoStatusChange(checkboxId,labelId)
    }

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = eachtodo.text;
    labelElement.id=labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa","fa-trash-o","delete-icon");
    deleteIcon.onclick = function (){
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
  
}

for(let eachtodo of todoList){
    createAndAppendTodo(eachtodo);
}


function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked")
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement);
}


addtodobutton.onclick=function (){
    onAddTodo();
}

function onAddTodo(){
    let todosCount = todoList.length
    todosCount = todosCount + 1;

    let userInputElement = document.getElementById("todouserinput");
    let userInputValue = userInputElement.value;

    if(userInputValue === ""){
        alert("Enter Valid text");
        return;
    }

    let newTodo = {
        text : userInputValue,
        uniqueNo : todosCount
    };
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}
