const createSelect = (countries) => {
    const root = document.getElementById("root");
    const select = document.createElement("select");
    root.appendChild(select);
    countries.array.forEach((item, i) => {
        let opt = new Option(item["country"], item["coutry_id"])
        select.appendChild(opt);
        
    });
}

const getCountry = () =>{
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        // createSelect(data);
    }) 
    .catch((e)=> console.log(e))
}

getCountry();