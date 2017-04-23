//Lets require/import the HTTP module
//var http = require('http');

//Lets define a port we want to listen to
//const PORT=8080; 
//const PORT=80;

//We need a function which handles requests and send response
/*function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    console.log("Path requested: "+request.url+"\nFrom IP: "+request.connection.remoteAddress+"\n\n");
}
*/
//Create a server
//var server = http.createServer(handleRequest);
var server2=require('diet');

//Lets start our server
/*server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
*/

var fs=require('fs')
var logger=fs.createWriteStream('log.txt',{flags: 'a'})



var app=server2()
app.listen('http://nschaff.com')
app.get('/',function($){
logger.write('\nnschaff request\n')
$.end('hello world nschaff!')
})

var app2=server2()
app2.listen('http://eschaff.com')
app2.get('/',function($){
logger.write('\neschaff request\n')
$.end('welcome to eschaff')
})

var app3=server2()
app3.listen('http://imperialcostestimator.click')
app3.get('/',function($){
logger.write('\nimperial request\n')
$.end('arrived at cost estimator')
})

var appz=server2()
appz.listen('http://zschaff.com')
appz.get('/',function($){
logger.write('\nzschaff request\n')
$.end('sunglasses emoji')
})
