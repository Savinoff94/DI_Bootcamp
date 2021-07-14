let box = document.getElementsByClassName("box")[0];
box.addEventListener("click", addBox);
let leftStart = 0;
let topStart = 0;


function addBox(event){
    let container = document.createElement("div");
    container.classList.add("containerBox");
    document.body.appendChild(container);
    if(document.body.offsetWidth - leftStart - container.offsetWidth < container.offsetWidth){
        topStart += container.offsetHeight;
        leftStart = 0;
    }else{
        leftStart += container.offsetWidth;
    }
    container.style.left = `${leftStart}px`;
    
    container.style.top = `${topStart}px`;

    let animation = document.createElement("div");
    animation.classList.add("animation");
    container.appendChild(animation);
    document.body.appendChild(container);

    let id = setInterval(function(){
        animation.style.width = `${animation.offsetWidth + 1}px`;
        animation.style.height = `${animation.offsetHeight + 1}px`;
        if(animation.offsetHeight==container.offsetHeight){
            clearInterval(id);
        }
    }, 1);

}