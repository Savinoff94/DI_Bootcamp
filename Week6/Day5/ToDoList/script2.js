

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
    for(item of arr){
        let div = document.createElement("div");
        div.setAttribute("id", "container");
        let h2 = document.createElement("h2");
        h2.innerText = item["taskName"];
        let h2_2 = document.createElement("h2");
        let mydate = new Date(item["start"]).toDateString();
        h2_2.innerText = `Starts ${mydate}`;
        let today = new Date();
        let finishDate = new Date(item["finish"]);
        let differenceTime =Math.round((finishDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
        console.log(differenceTime);
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
        document.body.appendChild(div);
    }
}

function myCheckbox(event){
    let obj = JSON.parse(localStorage.getItem(event.target.value));
    console.log(event.target.value);
    obj["complete"] = true;
    obj = JSON.stringify(obj);
    localStorage.setItem(event.target.value, obj);
}