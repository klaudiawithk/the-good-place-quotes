const express = require('express');
const graphqlHTTP = require('express-graphql');
const generator = require('./quotes/generator');
const port = process.env.PORT || 8000;
const schema = require('./schema/schema');

const app = express();

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/api/random', (req, res) => res.send(generator.getRandom()));
app.get('/api/character/:name', (req, res) => res.send(generator.getCharacter(req.params.name)));
app.get('/api', (req, res) => res.send(generator.getAll()));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => console.log(`Server running on ${port}`));