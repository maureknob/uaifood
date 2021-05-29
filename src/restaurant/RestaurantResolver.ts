var RestaurantSchema = require('./RestaurantSchema');

var newRestaurant

module.exports = {
    Query: {
        restaurants: () => RestaurantSchema.find(),
        restaurant: (_, { id }) => RestaurantSchema.findById(id)
    },

    Mutation: {
        createRestaurant: async (_, { RestaurantInput: { name, adress, cep } }) => 
        {
           await RestaurantSchema.create({ name, adress, cep })
        },

        createMenu: async (_, { MenuInput: { restaurantId, name, description, price } }) => 
        {
            const restaurant = await RestaurantSchema.findById(restaurantId)
            console.log(restaurantId, name, description, price);
            if(restaurant) {
                restaurant.menu.unshift({
                    name, description, price
                })
                restaurant.save()
            }
        },
        
        deleteRestaurant: (_, { id }) => RestaurantSchema.findByIdAndRemove(id, {useFindAndModify: false})
    },
};