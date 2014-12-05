var http = require("http");

http.createServer(function(req, res) {
	var html = "<!DOCTYPE html>" +
		"<html><head><title>Hello World</title></head>" +
		"<body><h1>Hello, World!</h1></body></html>";

	res.writeHead(200, {
		//Set the type of content we're returning
		"Context-Type": "text/html",
		// Set the length of our content
		"Content-Length": html.length
	});

	// End the response, sending it and returning our HTML
	res.end(html);
}).listen(8000, "127.0.0.1");