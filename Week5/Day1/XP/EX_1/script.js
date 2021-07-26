

const searchParams = new URLSearchParams(window.location.search);

const  data = Object.fromEntries(searchParams)


let p = document.createElement("p");
p.innerText = `${data["name"]} ${data["comments"]}`
document.getElementsByClassName("container")[0].appendChild(p);