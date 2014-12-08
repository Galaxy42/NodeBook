var http = require("http"),
	path = require("path"),
	fs = require("fs"),
	extensions = {
		".html": "text/html",
		".css": "text/css",
		".js": "aplication/javascript",
		".png": "image/png",
		".gif": "image/gif",
		".jpg": "image/jpeg",
	};
var connect = require("connect");
	connect(connect.static(_dirname + "/public")).listen(8000);

http.createServer(function(req, res) {
	function getFile (localPath, mimeType, res) {
		fs.readFile(localPath, function(err, contents) {
			if (!err) {
				res.writeHead(200, {
					"Content-Type": mimeType,
					"Content-length": contents.length
				});
			} else {
				res.writeHead(500);
				res.end();
			}
		});
	}
	var filename = path.basename(req.url) || "index.html",
		ext = path.extname(filename),
		dir = path.dirname(req.url).substring(1),
		localPath = __dirname + "/public/";

	if (extensions[ext]) {
		localPath += (dir ? dir + "/" : "") + filename;
		path.exists(localPath, function(exits) {
			if (exits) {
				getFile(localPath, extensions[ext], res);
			} else {
				res.writeHead(404);
				res.end();
			}
		});
	}

}).listen(8000);