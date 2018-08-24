const quotes = require('./quotes');

const getAll = () => quotes;

const getRandom = () => quotes[Math.floor(Math.random() * quotes.length)];

const getCharacter = (character) => {
    return quotes.filter(quote => {
        if (quote.character.toLowerCase() === character.toLowerCase()) 
            return quote;
    });
}

module.exports = { 
    getAll, 
    getRandom, 
    getCharacter 
}