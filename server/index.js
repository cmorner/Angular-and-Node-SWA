//http://runnable.com/UTlPPF-f2W1TAAEe/render-jade-with-express-for-node-js

var express = require('express');
var app = express();
var bodyParser = require('body-parser')


var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'jade');

// app.get('/', function (req, res) {
// 	res.render('index');
// });

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/items/:dynamic', function (req, res) {
	res.json({ message: 'items:D' });
	console.log('res:', res);
});

app.get('/item/', function (req, res) {
	res.json({title: 'En vacker tafla'});
});

app.use('/api', router);

app.listen(port);
console.log('Server is up and running on port ', port);

// POST /item/add
// POST /item/edit
// POST /item/remove

// GET /items/#category/?search=string
