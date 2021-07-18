let listTasks = [];

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", saveTask);

function saveTask(event){
    let todo = document.getElementById("todo");
    if(todo.value == ""){
        return;
    }else{
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.width = "100%";
        let icon = document.createElement("div");
        icon.innerHTML = "<i class='fas fa-times'></i>"
        div.appendChild(icon);
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        let label = document.createElement("label");
        let text = document.createTextNode(todo.value);
        label.appendChild(text);
        div.appendChild(input);
        div.appendChild(label);
        document.getElementsByClassName("listTasks")[0].appendChild(div);
        todo.value = "";

    }
}