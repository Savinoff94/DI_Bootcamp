let student = {first: 'Elie',
last:'Schoppik'
};



function displayStudentInfo(obj1){
    let {first, last} = obj1;
    console.log(`her name is ${first} ${last}`);
}

displayStudentInfo(student);