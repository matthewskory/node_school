//prints the number of new lines \n found in a file passed through the 
//command line. It turns that buffer file into a string then splits it 
//into an array before counting the length of the array.

var fs = require("fs");
var file = process.argv[2];

// Asynchronous read
// Asynch callbacks have the error check first (idiomatic)
fs.readFile(file, function(err, data){
	if(err){
		console.log("somethings wrong");
	}else{
	var stringData = data.toString();
	var lines = stringData.split('\n');
	console.log(lines.length-1);
	};

});
