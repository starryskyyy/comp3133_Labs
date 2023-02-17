
var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

const SERVER_PORT = 4000


var schema = buildSchema(`
    type Query{
        hello: String
        course(id: Int!): Course
        courses(topic: String): [Course]
        allCourses: [Course]
    },
    type Mutation{
        updateCourseTopic(id: Int!, topic: String!): Course
    }
    type Course{
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`)

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-word applications with Node, Express, MongoDB, Mocha and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building and deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closure, prototype, this, build your own framework and more',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understanding-javascript/'
    }

]

// Root resolver 


const getCourseById = (args) => {
    const courseId = args.id
    return coursesData.filter(course => {
        return course.id == courseId
    })[0]
}

const getCoursesByTopic = (args) => {
    const topic = args.topic
    return coursesData.filter(course => {
        return course.topic == topic
    })
}

const getAllCourses = (args) => {
    return coursesData
}

const updateCourseTopic = ({id, topic}) =>{
    coursesData.map(course =>{
        if (course.id === id){
            course.topic = topic
            return course
        }
    })
    return coursesData.filter(course => course.id === id) [0]
}

var root = {
    hello: () => 'Hello, world',
    course: getCourseById,
    courses: getCoursesByTopic,
    allCourses: getAllCourses,
    updateCourseTopic
}

var app = express()

const graphqlHttp = graphqlHTTP({
    schema: schema,  // Set schema
    rootValue: root, // Set resolver
    graphiql: true    // Client access
})

app.use('/graphql', graphqlHttp)



app.listen(SERVER_PORT, () => console.log(`Express GraphQL Server now running on http://localhost:${SERVER_PORT}/graphql`))