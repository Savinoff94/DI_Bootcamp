let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }




let userName = prompt("prompt your name").toLowerCase();
  
  

if(userName in guestList){
    console.log(`Hey i am ${userName} from ${guestList[userName]}`)
}else{
    console.log("Hi! I am a sguest");
}