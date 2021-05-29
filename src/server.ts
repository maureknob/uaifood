const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./restaurant/RestaurantResolver');
var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:events@cluster0.vxsc5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
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