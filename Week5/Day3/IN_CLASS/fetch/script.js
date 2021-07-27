

function word(){
  fetch('http://random-word-api.herokuapp.com/word?number=1')
  .then(response => {
    if(response.status == 200){

      return response.json();
    }else{
      console.log("error");
      throw new Error("not 200");
    }

  })
  .then(data => data[0]);
}

word();


// let urlGifi ='https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// let button = document.getElementById("button");
// button.addEventListener("click", requestdata);

// function requestdata(){
//   fetch(urlGifi)
//   .then(response => {

//     if(response.status == 200){
//       console.log("aaa");
//       return response.json();
//     }else{
//       console.log("zzz");
//       throw new Error("not 200");
//     }
//   })
//   .then(jsonData => {
//     displayUser(jsonData.data);
//   })
//   .catch(error => {
//     displayError(error);
//   })
// }

// const displayUser = (data) => {
//   console.log("display");
// 		let img = document.createElement("img");
// 		img.setAttribute("src", data["image_url"]);
// 		img.style.height = "200px";
// 		document.getElementsByClassName("container")[0].appendChild(img);
// }

// const displayError = (xhr) => {
//   let error = document.getElementById("error");
//   let h2 = document.createElement("h2");
//   h2.textContent = `Error`;
//   // h2.textContent = `Error : ${xhr.status}`
//   h2.style.backgroundColor = 'pink';
//   error.appendChild(h2);
// }