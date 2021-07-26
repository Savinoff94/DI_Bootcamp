let form = document.forms[0];
form.addEventListener("submit", mySubmit);

function mySubmit(event){
    event.preventDefault();
    let obj = {};
    obj.firstName = form.elements["firstName"].value;
    obj.lastName = form.elements["firstName"].value;
    console.log(obj);
    obj = JSON.stringify(obj,null,2);
    console.log(obj);

    fetch('index.html', {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    },
    body: obj,
    })
    .then(response => response.json())
    .then(obj => {
    console.log('Success:', obj);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}