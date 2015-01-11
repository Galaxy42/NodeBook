var http = require("http"),
	querystring = require("querystring");
	
http.createServer(function(req, res) {
	// Parse everything after the "?" intro key/value pairs
	var qs = querystring.parse(req.url.split("?")[1]),
		// Property names are the same as in the querystring
		userName = qs.firstName + " " + qs.lastName,
		html = "<!doctype html>" +
      "<html><head><title>Hello " + userName + "</title></head>" +
      "<body><h1>Hello, " + userName + "!</h1></body></html>";
      res.end(html);
}).listen(8000);