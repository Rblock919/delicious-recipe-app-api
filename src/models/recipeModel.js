var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeModel = new Schema({
    title: {
        type: String
    },
    producer: {
        type: String
    },
    ingredients: {
        type: String
    },
    numSteps: {
        type: Number
    },
    step1: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    step2: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    step3: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    step4: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    step5: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    step6: {
        type: [{
            name: {
                type: String
            },
            body: {
                type: String
            }
        }]
    },
    nutritionValues: {
        type: [{
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
        }]
    },
    imgDir: {
        type: String
    }
});

module.exports = mongoose.model('recipe', recipeModel);