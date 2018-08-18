const express = require('express');
var path = require('path');
const generator = require('./generator');

const app = express();
const port = process.env.PORT || 8000;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/api/random', function (req, res) {
	res.send(generator.getRandom());
});

app.get('/api/character/:name', function (req, res) {
	res.send(generator.getCharacter(req.params.name));
});

app.get('/api', function (req, res) {
	res.send(generator.getAll());
});

app.listen(port, function () {
	console.log('Server running on port', port);
})