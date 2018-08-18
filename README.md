# The Good Place quotes API
Because The Good Place is iconic. 
This is the simplest server.

## Production host
[https://good-place-quotes.herokuapp.com/api](https://good-place-quotes.herokuapp.com/api)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /api`
Returns an array with all quotes:
```javascript
[
	{
        character: 'Michael',
        quote: 'Any place or thing in the universe can be up to 104% perfect. That\'s how you get Beyoncé.'
    },
    {
        character: 'Eleanor',
        quote: 'YA BASIC!'
    },
    {
        character: 'Janet',
        quote: 'Fun fact: Columbus is in The Bad Place cause of all the raping, slave trade and genocide.'
    },
]
```

### `GET /api/random`
Returns an array with a single random quote object
```javascript
{
    character: "Janet",
    quote: "Not a robot."
}
```

### `GET /api/character/<name>`
Returns an array with `<name>` quotes e.g. `GET /character/eleanor`.
Currently supporting: Eleanor, Chidi, Tahani, Jason, Michael, Pillboi, Derek
```javascript
[
    {
        character: "Jason",
        quote: "She's my everything. She makes the bass drop in my heart."
    },
    {
        character: "Jason",
        quote: "I wasn't a failed DJ. I was pre-successful."
    },
    {
        character: "Jason",
        quote: "I'm telling you, Molotov cocktails work. Anytime I had a problem and I threw a Molotov cocktail, boom! Right away, I had a different problem."
    }
]
```

## JavaScript demo
[add link here]()
