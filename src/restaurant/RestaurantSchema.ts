var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    name: String,
    description: String,
    price: Number,
})

var RestaurantSchema = new Schema({
    name: String,
    adress: String,
    cep: String,
    culinary: String,
    menu: [MenuSchema]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);