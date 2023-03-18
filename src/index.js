var express = require('express');

var app = express();
const port = 18722;

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.use(myLogger);
app.use(requestTime);

app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>';
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
})