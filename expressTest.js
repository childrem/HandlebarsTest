// JavaScript source code
var express = require('express');

var app = express();

app.set('port', 5728);

function getRandomNum() {
    var numToReturn = Math.random();
    return numToReturn;
}

app.get('/', function (req, res) {
    res.render('random', getRandomNum());
});


app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
