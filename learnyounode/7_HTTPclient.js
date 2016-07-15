var url = process.argv[2];
var http = require('http');

// get request with 2 arguments (url and callback in this case response) 
http.get(url,function(response){
    //response returns an object/stream setEncoding(utf8) will turn that into a string
    response.setEncoding('utf8');
    // error console log 'err'
    response.on("error", console.error);
    //console log data
    response.on("data", console.log);

    });