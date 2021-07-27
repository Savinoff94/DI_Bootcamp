

let getGifs = (function (event){
	let counter = 1;
	function inner(event){
		event.preventDefault();
		let valueInput = event.target.elements["input"].value;
		let offset = "&offset=" + counter;
		

		let url = "https://api.giphy.com/v1/gifs/search?q=" + valueInput + offset + "&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
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
				displayUser(xhr.response.data, counter);
				++counter; 
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
	return inner;

})()

let form = document.forms[0];
form.addEventListener("submit", getGifs);




const displayUser = (data, index) => {
	for(gif of data){
		let div = document.createElement("div");
		let img = document.createElement("img");
		img.setAttribute("id",`gif${index}`)
		img.setAttribute("src", gif["images"]["fixed_height"]["url"]);
		img.style.height = "200px";
		let button = document.createElement("button");
		let text = document.createTextNode("Delete");
		button.appendChild(text);
		div.appendChild(img);
		div.appendChild(button);
		button.addEventListener("click", deleter);
		document.getElementById("container").appendChild(div);

	}
}

const displayError = (xhr) => {
	console.log("in display error");
}

document.getElementById("delete").addEventListener("click", deleteEverything);

function deleteEverything(){
	document.getElementById("container").innerHTML = "";
}

function deleter(event){
	event.target.parentElement.remove();
}