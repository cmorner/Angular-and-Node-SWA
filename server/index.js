var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();


app.set('title', 'SA');

app.use(function (req, res, next) {
	console.log(req.method + ' ' + req.url);
	next();
});


// app.get('/', function (req, res) {
// 	res.render('index');
// });

router.get('/items/:dynamic', function (req, res) {
	res.json({ message: 'items:D' });
	console.log('res:', res);
});

router.get('/item/', function (req, res) {
	res.json({title: 'En vacker tafla'});
});

app.use('/api', router);

app.listen(port);
console.log('Server is up and running on port ', port);

// POST /item/add
// POST /item/edit
// POST /item/remove

// GET /items/#category/?search=string
