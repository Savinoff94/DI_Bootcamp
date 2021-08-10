

if(localStorage.length == 0){
    document.body.innerHTML = "TODO LIST IS EMPTY";
}else{
    renderTodos();
}

function renderTodos(){
    let arr = [];
    
   
    for(let i = 0; i < localStorage.length; ++i){
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(obj);
    }
    arr.sort((a,b) => (new Date(a["startDate"])) - (new Date(b["startDate"])));
    for(item of arr){
        let div = document.createElement("div");
        div.style.border = "black solid 2px";
        let p = document.createElement("p");
        p.innerText = item["taskDescription"];
        div.setAttribute("id", "container");
        let h2 = document.createElement("h2");
        h2.innerText = item["taskName"];
        let h2_2 = document.createElement("h2");
        let mydate = new Date(item["startDate"]).toDateString();
        h2_2.innerText = `Starts ${mydate}`;
        let today = new Date();
        
        let finishDate = new Date(item["finishDate"]);
        let differenceTime =Math.round((finishDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
        console.log("dif",differenceTime);
        div.appendChild(h2);
        div.appendChild(h2_2);
        if(differenceTime < 0){
            let h2_2_2 = document.createElement("h2");
            h2_2_2.innerText = `FAILED`;
            div.appendChild(h2_2_2);
        }else{
            let h2_2_2 = document.createElement("h2");
            h2_2_2.innerText = `Days Left ${differenceTime}`;
            div.appendChild(h2_2_2);

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("value", item["myKey"]);
            console.log(item);
            checkbox.checked = item["complete"];
            addEventListener('change', myCheckbox);

            let label = document.createElement("label");
            label.setAttribute("for", "complete");
            label.innerText = "Complete";
            div.appendChild(checkbox);
            div.appendChild(label);
        }
        div.setAttribute("id",item["myKey"])
        let deleteTask = document.createElement("button");
        let showTask = document.createElement("button");
        showTask.innerText = "SHOW DESCRIPTION";
        deleteTask.innerText = "DELETE";
        deleteTask.addEventListener("click", deleter);
        div.appendChild(deleteTask);
        div.appendChild(showTask);
        document.body.appendChild(div);
        showTask.addEventListener("click", bigger);
    }
}

function myCheckbox(event){

    let obj = JSON.parse(localStorage.getItem(event.target.value));
    console.log(event.target.value);
    obj["complete"] = true;
    obj = JSON.stringify(obj);
    localStorage.setItem(event.target.value, obj);
}

function deleter(event){
    localStorage.removeItem(event.target.parentNode.id);
    document.body.removeChild(event.target.parentNode);
}

function bigger(event){
    let obj = JSON.parse(localStorage.getItem(event.target.parentNode.id));
    console.log(obj);
    let p = document.createElement("p");
    console.log(obj["taskDescription"]);
    p.innerText = obj["taskDescription"];
    event.target.parentNode.appendChild(p);
}