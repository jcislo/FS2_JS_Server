const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

try {
    app.use(cors());

    app.get('/index', (req, res) =>  {
        console.log("This is working!");
        res.send("The server is working!!")
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} catch (err) {
    console.log(err);
}
