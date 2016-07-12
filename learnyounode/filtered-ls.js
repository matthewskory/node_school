//prints a filtered list of files in a given directory 
//using two process.argv  

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = "."+process.argv[3];

//async read directory with callback
fs.readdir(dir, function(err, list){
	//error handling
	if(err){
		console.log('you messed something up, dummy');
	}else{
		//for each item(file) in the returned array (list) compare the extname of that file to the provided filter extention
		list.forEach(function (file){
			if(path.extname(file) === filter){
				console.log(file);
			}
		})
	}
});