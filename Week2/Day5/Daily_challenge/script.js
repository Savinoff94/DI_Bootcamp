let bottles = 99;
let take = 0;

while(bottles > 0){
    take++;
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer`);
    if(bottles - take > 0){
    console.log(`Take ${take} down, pass it around`);
    }else{
        console.log(`Take ${bottles} down, pass it around`);
        console.log(`No more bottles of beer on the wall, no more bottles of beer`)
        console.log(`Go to the store and buy some more, 99 bottles of beer on the wall`)
    }
    bottles -=take;
}