var FoodTypeSchema = require('./FoodTypeSchema');

module.exports = {
    Query: {
        foodTypes: () => FoodTypeSchema.find(),
        foodType: (_, { id }) => FoodTypeSchema.findById(id)
    },

    Mutation: {
        createFoodType: (_, { 
            name
        }) => FoodTypeSchema.create({ 
            name
        }),
        deleteFoodType: (_, { id }) => FoodTypeSchema.findByIdAndRemove(id, {useFindAndModify: false})
    },
};