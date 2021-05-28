var RestaurantSchema = require('./RestaurantSchema');

module.exports = {
    Query: {
        restaurants: () => RestaurantSchema.find(),
        restaurant: (_, { id }) => RestaurantSchema.findById(id)
    },

    Mutation: {
        createRestaurant: (_, { 
            name, adress, cep, food
        }) => RestaurantSchema.create({ 
            name, adress, cep, food
        }),
        deleteRestaurant: (_, { id }) => RestaurantSchema.findByIdAndRemove(id, {useFindAndModify: false})
    },
};