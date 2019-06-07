var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeModel = new Schema({
    title: {
        type: String
    },
    producer: {
        type: String
    },
    ingredients: [
        String
    ],
    preCook: [
        String
    ],
    numSteps: {
        type: Number
    },
    steps: [
        {
            name: String,
            body: String
        }
    ],
    nutritionValues: {
        calories: {
            type: Number
        },
        fat: {
            type: Number
        },
        saturatedFat: {
            type: Number
        },
        carbohydrate: {
            type: Number
        },
        sugar: {
            type: Number
        },
        fiber: {
            type: Number
        },
        protein: {
            type: Number
        },
        cholesterol: {
            type: Number
        },
        sodium: {
            type: Number
        }
    },
    imgDir: {
        type: String
    },
    favoriters: [
        String
    ]
});

module.exports = mongoose.model('recipe', recipeModel);