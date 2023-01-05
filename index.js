const express = require('express')
const schema = require('./schema/schema.js')
const port = process.env.PORT || 9000
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const connectDB = require('./config/db')

const app = express()

connectDB()
//set up GraphiQL interface:
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))


app.listen(port, console.log(`Server running on port ${port}...`))
