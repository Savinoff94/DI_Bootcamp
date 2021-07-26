let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=dogs&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
	if (xhr.status != 200) {
	 	console.log("error status")
		displayError(xhr)
	} else {
		console.log("Finished Loading")
		displayUser(xhr.response.data) 
	}
};

xhr.onprogress = function(event) {
	console.log("Progressing")
	// console.log("progress", xhr)
	// console.log("event.lengthComputable", event.lengthComputable)
	// console.log(`Received ${event.loaded}`)
	// console.log("progress", xhr)
};

xhr.onerror = function(event) {
	console.log("error", xhr);
  	displayError(xhr)
};

const displayUser = (data) => {
	console.log(data);
	let img = document.createElement("img");
	img.setAttribute("src", data[0]["images"]["downsized"]["url"]);
	document.getElementById("container").appendChild(img);
}

const displayError = (xhr) => {
	console.log("in display error");
}