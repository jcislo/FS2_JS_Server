var http = require("http"); // HTTP
var url = require("url"); // URL handling
var fs = require("fs"); // File serving

const hostname = "localhost";
const port = 80; 

http.createServer(function(req, res) {
    var queryData = url.parse(req.url, true); // parse the URL data
    var filename = "../client" + queryData.pathname; // assign a file name for retrieval
    console.log(filename);

    // Read the file. If it exists send the contents back, if not return a 404 error
    fs.readFile(filename, function(err, data) {
      if (err) {
        console.log("file not found:" + filename);
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(
          '<p> 404 Not Found </p><p>return to <a href="/index.html">default page</a></p>'
        );
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/` + " ok");
  });