var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const SERVER_PORT = 4000

console.log("Express GraphQL Server")

var schema = buildSchema(
    `type Query{
        hello: String
        greetings(name: String): String
        goodbye: String
    }`
)

// Root resolver 
var root = {
    hello: () => 'Hello, world',
    greetings: (args) => {
        return `Hello, ${args.name}`
    },
    goodbye: () => 'See you next time'
}

var app = express()

const graphqlHttp = graphqlHTTP({
    schema: schema,  // Set schema
    rootValue: root, // Set resolver
    graphiql: true    // Client access
})

app.use('/graphql', graphqlHttp)



app.listen(SERVER_PORT, () => console.log(`Express GraphQL Server now running on http://localhost:${SERVER_PORT}/graphql`))