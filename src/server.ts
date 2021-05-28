const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const restaurantResolver = require('./UseCases/Restaurant/RestaurantResolver');
const FoodTypeResover = require('./UseCases/FoodType/FoodTypeResolver');
var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:events@cluster0.vxsc5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const resolvers = [
    restaurantResolver,
    FoodTypeResover
]

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers
});

server.start(() => {
    console.log('Server runing on port 4000')
});