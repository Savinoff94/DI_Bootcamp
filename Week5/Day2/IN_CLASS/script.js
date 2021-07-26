//1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
//2. Set the request
xhr.open('GET','https://jsonplaceholder.typicode.com/users');
//3. Send the request
xhr.send();
//4. Add events
xhr.onreadystatechange = function() {
  if (xhr.readyState == 0) {
    // unsent
    console.log("unsent")
  } else if(xhr.readyState == 1) {
    // open called
    console.log("open called")
  } else if (xhr.readyState == 2) {
    // response headers received
    console.log("response headers received")
  } else if (xhr.readyState == 3) {
    // response is loading (a data packet is received)
    console.log("response is loading")
  } else if (xhr.readyState == 4) {
  	console.log("xhr object = ", xhr)
    // request complete
    console.log("request complete")
    if (xhr.status != 200) { // analyze HTTP status of the response
    	//DISPLAY ERROR HERE
  	} else if (xhr.status === 200) {
  		let smth = JSON.parse(xhr.response);
        console.log(JSON.stringify(smth, null,2));
        for(item of smth){
            let p = document.createElement("p");
            p.innerText = `${item["name"]} ${item["username"]} ${item["email"]} ${item["address"]["city"]}}`
            document.getElementsByClassName("container")[0].appendChild(p);
        }
  	}
  }
};