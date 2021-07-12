let allBooks = [];

let LotR = {
    title : "LotR",
    author : "Tolkien",
    image : "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1d36b3f8-3379-4801-9606-c330eed60a01/600x900",
    alreadyRead : true
};

let harryPotter = {
    title : "Harry Potter",
    author : "Rowling",
    image : "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e8c54c6d-375a-49a3-bf93-600b9e34f489/300x450",
    alreadyRead : true
};

let Witcher = {
    title : "The Witcher",
    author : "Sapkovski",
    image : "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b10ddbe6-55dc-46fb-ba21-e8923bb80df2/220x330",
    alreadyRead : true
};

let Idiot = {
    title : "Idiot",
    author : "Dostoevski",
    image : "https://images-na.ssl-images-amazon.com/images/I/41JjG-hdGIL._SX331_BO1,204,203,200_.jpg",
    alreadyRead : true
};

allBooks.push(LotR);
allBooks.push(harryPotter);
allBooks.push(Witcher);
allBooks.push(Idiot);

let ul = document.createElement("ul");

for(item of allBooks){
    let li = document.createElement("li");
    let text = document.createTextNode(`${item["title"]} written by ${item["author"]}`);
    li.appendChild(text);
    let img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "150px";
    img.setAttribute("src", `${item["image"]}`);
    li.appendChild(img);
    ul.appendChild(li);
}

document.body.getElementsByClassName("listBooks")[0].appendChild(ul);