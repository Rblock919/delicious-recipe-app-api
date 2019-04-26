const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost/recipeApp');
const remoteUri = require('../config/db/dbconnection');
const recipe = require('../models/recipeModel');
const testRecipe = new recipe({
    title: 'Pineapple Poblano Beef+Mystery Meat Tacos',
    producer: 'Hello Fresh',
    ingredients: [
        'Red Onion | 1 unit',
        'Roma Tomato | 4 units',
        'Lime | 2 units',
        'Poblano Pepper | 2 units',
        'Cilantro | 1/2 oz',
        'Pineapple | 8 oz',
        'Sour Cream | 8 tbsp',
        'Taco Splice Blend | 2 tbsps',
        'Ground Beef | 20 oz',
        'Flour Tortillas | 12 units'
    ],
    numSteps: 6,
    step1: {
        name: 'Prep',
        body: 'Wash and dry all produce. Halve, peel, and finely dice onion. Core and seed poblanos, then cut into 1/3-inch squares. Core and seed ' +
            'tomatoes, then cut into 1-3-inch cubes. Rougly chop cilantro. Halve one lime; cut other into wedges for serving. Drain pineapple, reserving juice; ' +
            'rougly chop fruit.'
    },
    step2: {
        name: 'Make Salsa and Crema',
        body: 'Combine 2 tbsp onion, 1/2 cup poblanos, tomatoes, half the cilantro, pineapple, and squeeze of lime in a medium bowl. In a separate small bowl, ' +
            'combine sour cream with a squeeze of lime. Season with salt, pepper, and more lime to taste.'
    },
    step3: {
        name: 'Cook Veggies',
        body: 'Heat 1 tbsp oil in a large pan over medium-high heat. Add remaining onion and poblanos. Season with salt, pepper, and half the taco spice. ' +
            'Cook, tossing, until softened, about 2 minutes.'
    },
    step4: {
        name: 'Cook Beef',
        body: 'Add beef to pan, breaking up meat into pieces. Season with salt, pepper, and remaining taco spice. Cook, tossing occasionally, until browned ' +
            'and cooked through, 3-4 minutes. (TIP: Carefully pour out any excess grease in pan if mixture seems oily.) Stir in reserved pineapple juice and ' +
            'remove pan from heat.'
    },
    step5: {
        name: 'Warm Tortillas',
        body: 'While beef cooks, wrap tortialls in a damp paper towel and microwave on high until warm, about 30 seconds.'
    },
    step6: {
        name: 'Assemble and Serve',
        body: 'Divide beef mixture between tortillas. Spoon salse and crema over. Sprinkle with remaining cilantro. Serve with lime wedges on the side for ' +
            'squeezing over.'
    },
    nutritionValues: {
        calories: 680,
        fat: 33,
        saturatedFat: 14,
        carbohydrate: 61,
        sugar: 14,
        fiber: 6,
        protein: 31,
        cholesterol: 110,
        sodium: 1000
    },
    imgDir: '/images/pineapple-poblano-beef-tacos.jpg'
});

mongoose.connect(remoteUri.remote, {useNewUrlParser: true},  () => {
    console.log('connected to remote db');
});

let docuement;

// a function that does aync operation and returns a promise
const poop = function () {

    return new Promise(function (fulfill, reject) {
        testRecipe.save(function (err, doc) {
            if (err) {
                console.log('error saving');
                reject(err)

            } else {
                console.log('Success?');
                console.log('doc: ' + doc);
                docuement = doc;
                // console.log('rows affected: ' + rows);
            }
            mongoose.connection.close(() => {
                console.log('Mongoose connection closed');
                fulfill(docuement);
            });
        });

    });

}

// Call poop using .then
poop().then(function(result) {
    console.log('result: ' + docuement);
    // console.log('result: ' + result);
});

// Call poop using an async function
// async function main() {
//     var test = await poop();
//     console.log('test var: ' + test);
//     console.log('done');
// }
// + line below
// main();

// -------------------------------------------

// recipe.find({}, function (err, docs) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(docs);
//         mongoose.connection.close();
//     }
// });
