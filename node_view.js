var http = require('http'),
fs = require('fs'),
url = require('url'),
qs = require('querystring');

http.createServer(function(req, res){

	if(req.method=='GET'){
	
		// tojson
		var param_json = url.parse(req.url, true).query;
		console.log(param_json);

		// querystring
		//var hoge = url.parse(req.url).query;

		if(param_json.id == 1){
			console.log("id=1");

			fs.readFile('./page1.html', 'UTF-8', function(err, data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			});
		}else if(param_json.id == '2'){
			console.log("id=2");
			fs.readFile('./page2.html', 'UTF-8', function(err, data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			});
		}


		console.log("pg end");
	}
}).listen(1337, '127.0.0.1');
