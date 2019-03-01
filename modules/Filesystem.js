const fs = require('fs');
//each fs modiule has sync and async method in real world application use async

//Sync form
const files = fs.readdirSync('./');
console.log(files);


//Async form
//[prefered use]

fs.readdir('./',function(err, files){
  if (err) console.log('Error',err);
  else console.log('Result',files);
});
