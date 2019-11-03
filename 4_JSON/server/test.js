var http = require("http"); 
var url = require("url"); 
//var fs = require("fs"); 

const hostname = "localhost";
const port = 8080; 

let parson = {
  firstName: "pawel",
  lastName: "leja",
  email: "sonicp9@hotmail.com",
  address: "Toronto, ON",
  phone: "647-765-4321",
  verified: true
};

http
  .createServer(function(req, res) {
    let queryData = url.parse(req.url, true).query;
    let returnObject = {};
    console.log("Query Data");
    console.log(queryData);

    let keys = [];
    if (queryData.keys) {
      keys = queryData.keys.split(",");
    }
    console.log("Query Data keys");
    console.log(keys);
    keys.forEach(key => {
      if (Object.keys(parson).includes(key)) {
        returnObject[key] = parson[key];
      }
    });
    console.log("Return Object");
    console.log(returnObject);

    if (Object.keys(returnObject).length == 0) {
      console.log("no data");
      res.writeHead(200, { "Content-Type": "text/ html" });
      res.end("No matching key");
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(returnObject));
  })
  .listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/` + " ok");
  });