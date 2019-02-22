# The Good Place quotes API
Because The Good Place is iconic. 

This is the simplest server supporting both REST and GraphQL.

### Table of contents

<!--ts-->
   * [Production host](#production-host)
   * [Rest APIs](#rest-apis)
   * [GraphQL](#GraphQL)
   * [JavaScript demos](#javaScript-demos)
<!--te-->

## Production host
[https://good-place-quotes.herokuapp.com/](https://good-place-quotes.herokuapp.com/) 

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## REST APIs

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

## GraphQL
The endpoint for queries: [https://good-place-quotes.herokuapp.com/graphql](https://good-place-quotes.herokuapp.com/graphql)
 
### `QUERY quotes`
To request all quotes, query `quotes`:
```
quotes {
  character
  quote
}
```
Returns `data` object with a `quotes` array with all quotes:
```javascript
"data": {
  "quotes": [
    {
      "character": "Eleanor",
      "quote": "Holy motherforking shirtballs!"
    },
    {
      "character": "Chidi",
      "quote": "There really is an afterlife. I can't wait to have breakfast with Kant, and lunch with Michel Foucault, and then have dinner with Kant again so we can talk about what came up at breakfast!"
    },
    {
      "character": "Tahani",
      "quote": "It run for 16 years on the BBC. It did nearly 30 episodes."
    },
   ]
 }
```

### `QUERY quote`
For a single randomly generated quote, query `quote`:
```
quote {
  character
  quote
}
```
Returns `data` object with a single `quote` object
```javascript
"data": {
  "quote": {
    "character": "Tahani",
    "quote": "It's #TahaniTime."
  }
}
```

### `QUERY quote(name: "<name>")`
Currently supporting: Eleanor, Chidi, Tahani, Jason, Michael, Pillboi, Derek.

To get quotes from a spefic character, query:
```
character(name:"Derek") {
  quote
}
```
Returns `data` object with `character` array of quotes.
```javascript
"data": {
  "character": [
    {
      "quote": "Derek!"
    },
    {
      "quote": "Maximum Derek!"
    }
  ]
}
```


## JavaScript demos
#### REST API
[Demo app](https://good-place-quotes.glitch.me/) and [source code of demo](https://glitch.com/~good-place-quotes)

The page is hosted on [glitch](https://glitch.com/) and I'm using `fetch` API to fetch data. 

#### GraphQL 
[Demo app](https://good-place.glitch.me/) and [source code of demo](https://glitch.com/~good-place)

The page is hosted on [glitch](https://glitch.com/) and I'm using `fetch` API to fetch data. 
