var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.get('/items', function (req, res) {
	res.send('List items');
});

app.get('/items', function (req, res) {
	res.send('List items');
});

app.listen('3000');
console.log('Server is up and running on port 3000');

// POST /item/add
// POST /item/edit
// POST /item/remove

// GET /items/#category/?search=string
