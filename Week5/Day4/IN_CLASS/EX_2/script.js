async function word(){
    
    let word = await fetch('http://random-word-api.herokuapp.com/word?number=1');
    word = await word.json();
    word = word[0];

    return word;
}
  

  

let urlGifi ='https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
let button = document.getElementById("button");
button.addEventListener("click", requestdata);
  
async function requestdata(){
    let gifi = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word()}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    gifi = await gifi.json()
    console.log(gifi);
  
    const displayUser = (data) => {
    console.log("display");
        let img = document.createElement("img");
        console.log(gifi["data"]["fixed_height_downsampled_url"])
        img.setAttribute("src", gifi["data"]["fixed_height_downsampled_url"]);
        img.style.height = "200px";
        document.getElementsByClassName("container")[0].appendChild(img);
    }

    const displayError = (xhr) => {
    let error = document.getElementById("error");
    let h2 = document.createElement("h2");
    h2.textContent = `Error`;
    // h2.textContent = `Error : ${xhr.status}`
    h2.style.backgroundColor = 'pink';
    error.appendChild(h2);
    }
}

