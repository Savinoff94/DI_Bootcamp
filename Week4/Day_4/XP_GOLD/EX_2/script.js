let keysAndValues = { a: 1, b: 2, c: 3 };

function qwe(obj){
    let keys = Object.keys(obj).sort();
    let values = Object.values(obj).sort();
    return [keys,values];
}

