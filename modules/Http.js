const http = require('http');
//const server = http.createServer(); //here createServer is an event emitter so it has all the capability of event emitter
 //listning on port 3000


/*server.on('connection',(socket)=>{
    console.log('new Connection');
})
//this is very low level we want use this type we will use callback function
*/

/*
Tips
In real world we will not use this simple http becasue then there will be too many routes so we use framework 
called express which gives application a clean structure to handle various route internally express is build on 
http module in node
*/

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello ewrold');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
