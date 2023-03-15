var express = require('express');
var app = express();
const port = 18722;

app.get('/', function (req, res) {
    let options = {
        root: 'C:/Users/LSB/Documents/GitHub/ExpressJsStudy'
    };
    // res.send('Hello World!');
    res.sendFile('/maybe-a-file', options);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});