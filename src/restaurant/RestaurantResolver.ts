var RestaurantSchema = require('./RestaurantSchema');

var newRestaurant

module.exports = {
    Query: {
        restaurants: () => RestaurantSchema.find(),
        restaurant: (_, { id }) => RestaurantSchema.findById(id),
        restaurantAdress: (_, { adress }) =>  RestaurantSchema.find({ adress: adress },
            function(err, res){
                console.log(res)
            })
    },

    Mutation: {
        createRestaurant: async (_, { RestaurantInput: { name, adress, cep, culinary } }) => 
        {  
            await RestaurantSchema.update( { name: name}, { name, adress, cep, culinary }, { upsert: true })
        },

        createMenu: async (_, { MenuInput: { restaurantId, name, description, price } }) => 
        {
            const restaurant = await RestaurantSchema.findById(restaurantId)
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