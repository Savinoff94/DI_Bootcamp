let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=4&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

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
}

const displayError = (xhr) => {
	console.log("in display error");
}