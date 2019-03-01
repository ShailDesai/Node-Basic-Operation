const os = require('os');
var totalMemeory = os.freemem();
var freeMemeory = os.totalmem();

console.log('TotalMemory' + " "+ totalMemeory);
console.log(`FreeMemoery : ${freeMemeory}`);//this to remove contactination using ES6
