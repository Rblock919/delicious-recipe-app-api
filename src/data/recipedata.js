let recipedata = [
    {
        title: 'Crispy Chipotle Shrimp Tacos',
        producer: 'Hello Fresh',
        ingredients: [
            'Lime | 1',
            'Radishes | 3',
            'Scallions | 2',
            'Shrimp | 10oz',
            'Red Cabbage | 4oz',
            'Cornstarch | 2tbsp',
            'Chipotle Powder | 1tbsp',
            'Sour Cream | 4tbsp',
            'Flour Tortillas | 6'
        ],
        numSteps: 6,
        step1: {
            name: 'Prep',
            body: 'Wash and dry all produce. Cut lime into wedges. Halve radishes, then slice into thin half-moons. Trim, then thinly slice scallions, keeping greens' +
            ' and whites separate. Rinse shrimp under cool running water and pat dry with a paper towel.'
        },
        step2: {
            name: 'Toss Slaw',
            body: 'Toss cabbage and scallion whites in a medium bowl with a squeeze of lime, a drizzle of olive oil, salt, and pepper. Set aside.'
        },
        step3: {
            name: 'Coat Shrimp',
            body: 'Heat a 1/4 inch layer of oil in a large pan over high heat (use nonstick if possible). Meanwhile, place shrimp, cornstarch, and ' +
            '1/4 tsp chipotle powder in another medium bowl (we\'ll use more chipotle in step 5). Season with salt and pepper, Toss until shrimp are' +
            ' thoroughly coated.'
        },
        step4: {
            name: 'Cook Shrimp',
            body: 'Add shrimp to pan in a single layer and cook until golden brown and crisp, about 2 minutes per side. Remove from pan with a slotted spoon' +
            ' and set aside on a paper-towel-lined plate. Season with salt and pepper.'
        },
        step5: {
            name: 'Make Crema and Warm Tortillas',
            body: 'In a small bowl, stir together sour cream, a squeeze of lime, and a pinch of chipotle powder (use more to taste). Season with salt and pepper' +
            '. Add enough water to create a drizzly consistency (about 1 TBSP). Wrap tortillas in a lightly dampened paper towel and microwave until warm and soft,' +
            ' about 30 seconds'
        },
        step6: {
            name: 'Finish and Serve',
            body: 'Divide slaw, shrimp, and radishes between tortillas. Drizzle with crema, sprinkle with scallion greens, and serve with any remaining lime wedges' +
            ' for squeezing over.'
        },
        nutritionValues: {
            calories: 580,
            fat: 27,
            saturatedFat: 5,
            carbohydrate: 52,
            sugar: 7,
            fiber: 6,
            protein: 36,
            cholesterol: 235,
            sodium: 700
        },
        imgDir: '/images/crispy-chipotle-shrimp-tacos.jpg'
    },
    {
        title: 'Pineapple Poblano Beef Tacos',
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
    },
    {
        title: 'Southwestern Stuffed Peppers',
        producer: 'Hello Fresh',
        ingredients: [
            'Yellow Onion | 1 unit',
            'Scallions | 2 units',
            'Lime | 1 unit',
            'Red Bell Pepper | 1 unit',
            'Yellow Bell Pepper | 1 unit',
            'Chick Stock Concentrate | 1 unit',
            'Quinoa | 1/2 cup',
            'Ground Beef | 10 oz',
            'Crushed Tomatoes | 1 box',
            'Southwest Spice Blend | 1 tbsp',
            'Monterey Jack Cheese | 1/2 cup'
        ],
        numSteps: 6,
        step1: {
            name: 'Preheat and Prep',
            body: 'Wash and dry all produce. Adjust rack to middle position and preheat oven to 400 degrees. Bring 1 cup water, stock concentrate, and a pinch of ' +
            'salt to a boil in a small pot. Halve, peel, and dice onion. Trim, then thinly slice scallions. Cut lime into wedges.'
        },
        step2: {
            name: 'Cook Quinoa',
            body: 'Once water is boiling, add quinoa to pot. Cover, lower heat, and reduce to a simmer. Cook until tender, 15-20 minutes.'
        },
        step3: {
            name: 'Start Filling',
            body: 'Heat a drizzle of olive oil in a large pan over medium-high heat. Add onion and scallions. Cook, tossing, until softened, 4-5 minutes. Season ' +
            'with salt and pepper. Add beef, breaking up meat into pieces. Cook until browned, 3-4 minutes. Stir in Southwest spice and cook until fragrant, ' +
            'about 30 seconds. Season with salt and pepper.'
        },
        step4: {
            name: 'Prep and Roast Peppers',
            body: 'While onion and beef cook, halve bell peppers lengthwise, then remove white ribs and seeds. Rub all over with a drizzle of olive oil and season ' +
            'with salt and pepper. Place on a baking sheet. Roast in oven until softened, 5-7 minutes. Once cool enough to handle, arrange bell peppers cut-side ' +
            'up on a baking sheet.'
        },
        step5: {
            name: 'Finish Filling',
            body: 'Stir tomatoes into pan with beef and bring to a simmer. Let simmer until flavors have come together and tomatoes reduce slightly, about 5 minutes. ' +
            'Stir quinoa into pan once it has finished cooking. Season with salt and pepper.'
        },
        step6: {
            name: 'Finish and Serve',
            body: 'Stuff bell peppers with as much filling as will fit. Sprinkle cheese over top of each. Return to oven and continue roasting until very soft, ' +
            'about 10 minutes. Divide remaining filling between plates, then place stuffed peppers on top. Serve with lime wedges on the side.'
        },
        nutritionValues: {
            calories: 740,
            fat: 35,
            saturatedFat: 13,
            carbohydrate: 71,
            sugar: 19,
            fiber: 11,
            protein: 42,
            cholesterol: 11,
            sodium: 840
        },
        imgDir: '/images/sw-stuffed-peppers.jpg'
    }
]

module.exports = recipedata;