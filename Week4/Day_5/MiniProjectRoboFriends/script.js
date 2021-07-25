const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
];

let input = document.getElementsByTagName("input")[0];
document.addEventListener("keyup", matching);

function renderTemlate(obj){
  let container = document.getElementsByClassName("container")[0];
  container.style.display = "grid";
  if(obj.length % 3 == 0){
    container.style.gridTemplateColumns = "1fr 1fr 1fr";
    let rows = obj.length / 3;
    container.style.gridTemplateRows = `repeat(1fr, ${rows})`;
  }else if(obj.length % 2 == 0){
    container.style.gridTemplateColumns = "1fr 1fr";
    let rows = obj.length / 2;
    container.style.gridTemplateRows = `repeat(1fr, ${rows})`;
  // }else if (obj.length % 2 != 0){
  //     container.style.gridTemplateColumns = "1fr 1fr";
  //     let rows = obj.length / 2;
  //     container.style.gridTemplateRows = `repeat(1fr, ${rows + 1})`;
  }else{
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
  }
  let counter = 1;
  for(item of obj){
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "flex-start";
    div.style.backgroundColor = "lightblue";
    div.style.backgroundImage = `url(card.png)`;
    div.style.height = "467px";
    div.style.width = "354px";
    div.style.paddingTop = "10px"
    div.style.borderRadius = "10%";
    div.style.alignSelf = "start";
    if(obj.length % 2 == 0){
      if(counter % 2 != 0){
        div.style.justifySelf = "end";
      }else{
        div.style.justifySelf = "start";
      }  
    }else if(obj.length % 3 == 0){
      if(counter == 1){
        div.style.justifySelf = "end";
      }else if(counter == 2){
        div.style.justifySelf = "center";
      }else if(counter == 3){
        counter = 1;
        div.style.justifySelf = "start";
      }  
    }
    ++counter;

    let div2 = document.createElement("div");
    div2.style.backgroundImage = `url(${item["image"]})`;
    div2.style.backgroundColor = "grey";
    div2.style.width = "300px";
    div2.style.height = "300px";
    div2.style.borderRadius = "50%";

    let h1 = document.createElement("h1");
    h1.innerText = item["name"]

    let h2 = document.createElement("h2");
    h2.innerText = item["email"];

    div.appendChild(div2);
    div.appendChild(h1);
    div.appendChild(h2);
    container.appendChild(div);
  }
}

renderTemlate(robots);


function matching(event){
  let toLook = input.value.toLowerCase();
  let container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";
  


  // deleteTemplate();
  let toRender = [];
  toRender = robots.filter(function(item, index, arr){
    let name = item["name"].toLowerCase().split(" ")[0].substr(0,toLook.length);
    let familyName  = item["name"].toLowerCase().split(" ")[1].substr(0,toLook.length);
    if(name == toLook || familyName == toLook){
      return true;
    }
    else{
      return false;
    }
  })
  console.log("aaaaaa ",toRender);
  renderTemlate(toRender);
}

// function deleteTemplate(){
//     let container = document.getElementsByClassName("container")[0];
//     // let conteainerChildren = container.children;
//     // console.log(conteainerChildren);
//     // let lenghtarr = conteainerChildren.length;
//     // for(let i =0; i < lenghtarr; i++){
//     //     // console.log(childr);
//     //     container.removeChild(conteainerChildren[i]);
//     // }

//     // container.innerHTML = "";
// }