let Andrei = {
    name : "Andrei",
    mass : "90",
    height : "178",
    bmi : function() {
        return Number(this["mass"]) / Number(this["height"]);
    }
};

let Tanya = {
    name : "Tanya",
    mass : "55",
    height : "165",
    bmi : function() {
        return Number(this["mass"]) / Number(this["height"]);
    }
};

function compareBmi(obj1, obj2){
    if(obj1.bmi() > obj2.bmi()){
        console.log(obj1.bmi());
    }else if(obj1.bmi() = obj2.bmi()){
        console.log("equal");
    }else{
        console.log(obj2.bmi());
    }
}


compareBmi(Andrei, Tanya);