let submitButton = document.getElementById("submitButton");


let sendData = (function(event){
    let counter = localStorage.length;
    function inner (event){
        event.preventDefault();
        let myV = `todo${counter}`;
        let obj = {
            taskName : document.getElementById("name").value,
            taskDescription : document.getElementById("description").value,
            startDate : new Date(document.getElementById("startDate").value + " " + document.getElementById("startTime").value),
            finishDate : new Date(document.getElementById("finishDate").value + " " + document.getElementById("finishTime").value),
            complete : false,
            myKey : myV 
        }
        obj = JSON.stringify(obj);
        localStorage.setItem(`todo${counter}`, obj);
        ++counter;

        document.getElementById("name").value='';
        document.getElementById("description").value='';
        document.getElementById("startDate").value ='';
        document.getElementById("startTime").value ='';
        document.getElementById("finishDate").value='';
        document.getElementById("finishTime").value = '';
    }
    return inner;
})()

submitButton.addEventListener("click", sendData);

// event.preventDefault();
//     let obj = {
//         taskName : document.getElementById("name").value,
//         taskDescription : document.getElementById("description").value,
//         start : new Date(document.getElementById("startDate").value + " " + document.getElementById("startTime").value),
//         finish : new Date(document.getElementById("finishDate").value + " " + document.getElementById("finishTime").value)
//     }
//     obj = JSON.stringify(obj);
//     if(localStorage.length == 0){
//         obj = JSON.stringify(obj);
//         localStorage.setItem('todos', obj);
//     }else{
//         let localObj = 
//     }

//     // let taskName = document.getElementById("name").value;
//     // let taskDescription = document.getElementById("description").value;
//     // let start = new Date(document.getElementById("startDate").value + " " + document.getElementById("startTime").value);
//     // let finish = new Date(document.getElementById("finishDate").value + " " + document.getElementById("finishTime").value);
//     console.log(obj);