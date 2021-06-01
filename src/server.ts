const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./restaurant/RestaurantResolver');
var mongoose = require("mongoose");

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers
});

server.start(() => {
    console.log('Server runing on port 4000')
});