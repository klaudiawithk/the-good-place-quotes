const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql;
const generator = require('../quotes/generator');

const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: {
        character: { type: GraphQLString },
        quote: { type: GraphQLString }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        quotes: {
            type: new GraphQLList(QuoteType),
            resolve: () =>  generator.getAll(),
        },
        quote: {
            type: QuoteType,
            resolve: () => generator.getRandom(),
        },
        character: {
            type: new GraphQLList(QuoteType),
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (root, args) => generator.getCharacter(args.name),
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });