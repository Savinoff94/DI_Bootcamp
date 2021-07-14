function myMove(){
    let box = document.getElementById("animate");
    let step = 0;
    let id = setInterval(function(){
        if(step >= 400 - 50){
            clearInterval(id);
        }
        step += 1;
        box.style.top = `${step}px`;
        box.style.left = `${step}px`;
    }, 1)
}