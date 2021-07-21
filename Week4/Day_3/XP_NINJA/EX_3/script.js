const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
];

let years = 0;

for(item of data){
    if(item["type"] == "dog"){
        years += item["age"];
    }
}
console.log(years);

years = 0;

data.map(function(item){
    if(item["type"] == "dog"){
        years += item["age"];
    }
})
console.log(years);

years = 0;

years = data.reduce(reducer, 0)


function reducer(accumulator,item){
    if(item["type"] == "dog"){
        return accumulator += item["age"];
    }else{
        return accumulator;
    }

}
console.log(years);