//This problem is the same as the previous problem (HTTP COLLECT) in that
//you need to use http.get(). However, this time you will be provided with
//three URLs as the first three command-line arguments.
//
//You must collect the complete content provided to you by each of the URLs
//and print it to the console (stdout). You don't need to print out the
//length, just the data as a String; one line per URL. The catch is that you
//must print them out in the same order as the URLs are provided to you as
//command-line arguments.
var http = require('http')
var bl = require('bl')
var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];


http.get(urlOne, function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
        return console.error(err)
        dataone = data.toString()
        console.log(dataone)
            //nested call for url number 2
            http.get(urlTwo, function (response) {
                response.pipe(bl(function (err, data) {
                    if (err)
                    return console.error(err)
                    datatwo = data.toString()
                    console.log(datatwo)
                       //nested call for url number 3
                        http.get(urlThree, function (response) {
                        response.pipe(bl(function (err, data) {
                            if (err)
                            return console.error(err)
                            datathree = data.toString()
                            console.log(datathree)
                        }))
                    })
                }))
            })
    }))
})


//offical solution using for loop seems like you could place the entire http.get and console log in the loop and print it each time it loops through
 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
   for (var i = 0; i < 3; i++)
     console.log(results[i])
 }

 function httpGet (index) {
   http.get(process.argv[2 + index], function (response) {
     response.pipe(bl(function (err, data) {
       if (err)
         return console.error(err)

       results[index] = data.toString()
       count++

       if (count == 3)
         printResults()
     }))
   })
 }

 for (var i = 0; i < 3; i++)
   httpGet(i)
