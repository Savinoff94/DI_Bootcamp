const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

let cleanMail = userEmail3.split("").reduce((acc,item) => { return (item!=" ") ? acc + item : acc}, "");
console.log(cleanMail);

