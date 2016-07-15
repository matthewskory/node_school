var http = require('http')
var bl = require('bl')

//http get request with 2 arguments (url and response function)
http.get(process.argv[2], function (response) {
    //response is piped through bl(buffer list) which contais two possible returns err and data.
    response.pipe(bl(function (err, data) {
        //if err console.log err
        if (err)
            return console.error(err)
        //if data make it a string, print the length and contents of data (var not necessary for some reason?).
        var data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})