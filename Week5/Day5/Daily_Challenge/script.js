
let api = "ea4e3ee2ad26c8621cd225c6d0105c58"
renderOptions();

document.getElementById("myButton").addEventListener('click',async (event) => {
    event.preventDefault();
    if(isNaN(document.getElementById("convert").value)){
        document.getElementById("output").innerText = "input ONLY numbers";
        return;
    }
    document.getElementById("output").innerText = "";
    console.log("asdsasdasdasda");
    let from = document.getElementById("fromCurrence").value;
    let to = document.getElementById("toCurrence").value;
    let amount = document.getElementById("convert").value;
    let obj = await loadData("http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1");
    if(from == "USD"){
        let answer = amount * obj["quotes"][`USD${to}`];
        document.getElementById("output").innerText = answer.toLocaleString(undefined,{ minimumFractionDigits: 1 });
    }else if(to == "USD"){
        let answer = amount / obj["quotes"][`USD${from}`];
        document.getElementById("output").innerText = answer.toLocaleString(undefined,{ minimumFractionDigits: 1 });
    }else{
        let answer =amount / obj["quotes"][`USD${from}`] * obj["quotes"][`USD${to}`];
        document.getElementById("output").innerText = answer.toLocaleString(undefined,{ minimumFractionDigits: 1 });
    }
});

async function renderOptions(){
    const fromCurrence = document.getElementById('fromCurrence');
    const toCurrence = document.getElementById('toCurrence');
    let obj = await loadData("http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1")
    let currencyList = obj["currencies"];
    for(key in currencyList){
        let optionFrom = document.createElement("option");
        let optionTo = document.createElement("option");
        optionFrom.innerText = currencyList[key];
        optionTo.innerText = currencyList[key];
        optionFrom.setAttribute("value", key);
        optionTo.setAttribute("value", key);
        fromCurrence.appendChild(optionFrom);
        toCurrence.appendChild(optionTo);
    }
}

async function loadData(url){
    try{
        let fetched = await fetch(url);
        if(fetched.status == 200){
            let response = await fetched.json();
            return response;
        }else{
            throw new Error('not 200');
        }
    }catch(err){
        // renderError(err);
        console.log(err);
    }
}