let grades = [56, 78, 89, 78, 54, 96];


function countAverageGrade(list){
    let averageGrade = 0;
    for(grade of list){
        averageGrade += grade;
    }
    return averageGrade/list.length;
}


function passOrNot(grade_list) {
    if(countAverageGrade(grade_list) > 65){
        console.log("you passed");
    }else{
        console.log("you failed");
    }
} 


passOrNot(grades);