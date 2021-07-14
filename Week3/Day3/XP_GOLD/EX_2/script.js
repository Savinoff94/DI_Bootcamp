let p = document.getElementsByTagName("p")[0];
p.style.position = "absolute";

p.addEventListener("dragend", dragEndHandler);

p.addEventListener("drag", dragHandler);

function dragHandler(event){
    let tmp = event.clientX / 2;
    console.log(tmp);
    p.style.fontSize = `${tmp}px`;

}

function dragEndHandler(event){
    let tmp = event.clientX / 2;
    p.style.fontSize = `${tmp}px`;
    let x = event.clientX;
    let y = event.clientY;
    event.target.style.top = `${y}px`;
    event.target.style.left = `${x}px`;

}