const express = require('express');
const cors = require('cors');
const url = require('url');
require('date-utils');
const app = express();
const port = 80;

try {
    app.use(cors());

    app.get('/index', (req, res) =>  {
        var queryData = url.parse(req.url, true).query;
        console.log(queryData);
        let queryString = "";
        Object.keys(queryData).forEach(key => {
        if (queryString != "") {
            queryString += ", ";
        }
        queryString += `${key}:${queryData[key]}`;
        });
        if (queryString == "") {
        queryString = "No query";
        }
        // Get current datetime
        let now = new Date();

        // Now we have an object we can work with
        var returnValue =
        `request time: ${now.toFormat("MMM DD YYYY HH24:MI:SS")}\n` +
        `url: ${hostname}:${port}${req.url}\n` +
        `query: ${queryString}`;
        console.log(returnValue);
        
        res.send(returnValue);
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} catch (err) {
    console.log(err);
}
