var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var RestaurantSchema = new Schema({
    name: String,
    adress: String,
    cep: String,
    food: {
        type: Schema.Types.ObjectId,
        ref: 'FoodType'
    }
});
// var RestaurantSchema = new mongoose.Schema({
//     name: String,
//     adress: String,
//     cep: String,
//     food: {
//         type: RestaurantSchema.Types.ObjectId,
//         ref: 'FoodType'
//     }
// })

module.exports = mongoose.model('Restaurant', RestaurantSchema);