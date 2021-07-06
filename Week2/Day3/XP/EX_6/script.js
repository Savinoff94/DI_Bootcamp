let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let sentense = "";
  for(data in details) {
    sentense = sentense + data + " " + details[data] + " " ; 
  }
  console.log(sentense);
