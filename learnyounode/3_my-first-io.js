//prints the number of new lines \n found in a file passed through the 
//command line. It turns that buffer file into a string then splits it 
//into an array before counting the length of the array.

var fs = require("fs");

// Synchronous read
var data = fs.readFileSync(process.argv[2]);
//console.log("Synchronous read: " + data.toString());
var stringData = data.toString();
var lines = stringData.split('\n');
console.log(lines.length-1);