var mongoose = require("mongoose");

var FoodTypeSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model('FoodType', FoodTypeSchema);