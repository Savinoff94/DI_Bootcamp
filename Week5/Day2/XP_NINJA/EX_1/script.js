let form = document.forms[0];
form.addEventListener("submit", getGifs);

function getGifs(event){
	event.preventDefault();
	let valueInput = event.target.elements["input"].value;

	let url = "https://api.giphy.com/v1/gifs/search?q=" + valueInput + "&limit=5&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.responseType = 'json';
	xhr.send();

	xhr.onload = function() {
		if (xhr.status != 200) {
			 console.log("error status")
			// displayError(xhr)
		} else {
			console.log("Finished Loading")
			console.log(xhr.response.data);
			displayUser(xhr.response.data) 
		}
	};

	xhr.onprogress = function(event) {
		console.log("Progressing")
	};

	xhr.onerror = function(event) {
		console.log("error", xhr);
		//   displayError(xhr)
	};



}


const displayUser = (data) => {
	console.log(data);
	for(gif of data){
		let img = document.createElement("img");
		img.setAttribute("src", gif["images"]["fixed_height"]["url"]);
		img.style.height = "200px";
		document.getElementById("container").appendChild(img);

	}
}

const displayError = (xhr) => {
	console.log("in display error");
}

document.getElementById("delete").addEventListener("click", deleteEverything);

function deleteEverything(){
	document.getElementById("container").innerHTML = "";
}