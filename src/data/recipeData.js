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
        steps: [
            {
                name: 'Prep',
                body: 'Wash and dry all produce. Cut lime into wedges. Halve radishes, then slice into thin half-moons. Trim, then thinly slice scallions, keeping greens' +
                ' and whites separate. Rinse shrimp under cool running water and pat dry with a paper towel.'
            },
            {
                name: 'Toss Slaw',
                body: 'Toss cabbage and scallion whites in a medium bowl with a squeeze of lime, a drizzle of olive oil, salt, and pepper. Set aside.'
            },
            {
                name: 'Coat Shrimp',
                body: 'Heat a 1/4 inch layer of oil in a large pan over high heat (use nonstick if possible). Meanwhile, place shrimp, cornstarch, and ' +
                '1/4 tsp chipotle powder in another medium bowl (we\'ll use more chipotle in step 5). Season with salt and pepper, Toss until shrimp are' +
                ' thoroughly coated.'
            },
            {
                name: 'Cook Shrimp',
                body: 'Add shrimp to pan in a single layer and cook until golden brown and crisp, about 2 minutes per side. Remove from pan with a slotted spoon' +
                ' and set aside on a paper-towel-lined plate. Season with salt and pepper.'
            },
            {
                name: 'Make Crema and Warm Tortillas',
                body: 'In a small bowl, stir together sour cream, a squeeze of lime, and a pinch of chipotle powder (use more to taste). Season with salt and pepper' +
                '. Add enough water to create a drizzly consistency (about 1 TBSP). Wrap tortillas in a lightly dampened paper towel and microwave until warm and soft,' +
                ' about 30 seconds'
            },
            {
                name: 'Finish and Serve',
                body: 'Divide slaw, shrimp, and radishes between tortillas. Drizzle with crema, sprinkle with scallion greens, and serve with any remaining lime wedges' +
                ' for squeezing over.'
            }
        ],
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
        imgDir: 'assets/images/crispy-chipotle-shrimp-tacos.jpg'
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
        steps: [
            {
                name: 'Prep',
                body: 'Wash and dry all produce. Halve, peel, and finely dice onion. Core and seed poblanos, then cut into 1/3-inch squares. Core and seed ' +
                'tomatoes, then cut into 1-3-inch cubes. Rougly chop cilantro. Halve one lime; cut other into wedges for serving. Drain pineapple, reserving juice; ' +
                'rougly chop fruit.'
            },
            {
                name: 'Make Salsa and Crema',
                body: 'Combine 2 tbsp onion, 1/2 cup poblanos, tomatoes, half the cilantro, pineapple, and squeeze of lime in a medium bowl. In a separate small bowl, ' +
                'combine sour cream with a squeeze of lime. Season with salt, pepper, and more lime to taste.'
            },
            {
                name: 'Cook Veggies',
                body: 'Heat 1 tbsp oil in a large pan over medium-high heat. Add remaining onion and poblanos. Season with salt, pepper, and half the taco spice. ' +
                'Cook, tossing, until softened, about 2 minutes.'
            },
            {
                name: 'Cook Beef',
                body: 'Add beef to pan, breaking up meat into pieces. Season with salt, pepper, and remaining taco spice. Cook, tossing occasionally, until browned ' +
                'and cooked through, 3-4 minutes. (TIP: Carefully pour out any excess grease in pan if mixture seems oily.) Stir in reserved pineapple juice and ' +
                'remove pan from heat.'
            },
            {
                name: 'Warm Tortillas',
                body: 'While beef cooks, wrap tortialls in a damp paper towel and microwave on high until warm, about 30 seconds.'
            },
            {
                name: 'Assemble and Serve',
                body: 'Divide beef mixture between tortillas. Spoon salse and crema over. Sprinkle with remaining cilantro. Serve with lime wedges on the side for ' +
                'squeezing over.'
            }
        ],
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
        imgDir: 'assets/images/pineapple-poblano-beef-tacos.jpg'
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
        steps: [
            {
                name: 'Preheat and Prep',
                body: 'Wash and dry all produce. Adjust rack to middle position and preheat oven to 400 degrees. Bring 1 cup water, stock concentrate, and a pinch of ' +
                'salt to a boil in a small pot. Halve, peel, and dice onion. Trim, then thinly slice scallions. Cut lime into wedges.'
            },
            {
                name: 'Cook Quinoa',
                body: 'Once water is boiling, add quinoa to pot. Cover, lower heat, and reduce to a simmer. Cook until tender, 15-20 minutes.'
            },
            {
                name: 'Start Filling',
                body: 'Heat a drizzle of olive oil in a large pan over medium-high heat. Add onion and scallions. Cook, tossing, until softened, 4-5 minutes. Season ' +
                'with salt and pepper. Add beef, breaking up meat into pieces. Cook until browned, 3-4 minutes. Stir in Southwest spice and cook until fragrant, ' +
                'about 30 seconds. Season with salt and pepper.'
            },
            {
                name: 'Prep and Roast Peppers',
                body: 'While onion and beef cook, halve bell peppers lengthwise, then remove white ribs and seeds. Rub all over with a drizzle of olive oil and season ' +
                'with salt and pepper. Place on a baking sheet. Roast in oven until softened, 5-7 minutes. Once cool enough to handle, arrange bell peppers cut-side ' +
                'up on a baking sheet.'
            },
            {
                name: 'Finish Filling',
                body: 'Stir tomatoes into pan with beef and bring to a simmer. Let simmer until flavors have come together and tomatoes reduce slightly, about 5 minutes. ' +
                'Stir quinoa into pan once it has finished cooking. Season with salt and pepper.'
            },
            {
                name: 'Finish and Serve',
                body: 'Stuff bell peppers with as much filling as will fit. Sprinkle cheese over top of each. Return to oven and continue roasting until very soft, ' +
                'about 10 minutes. Divide remaining filling between plates, then place stuffed peppers on top. Serve with lime wedges on the side.'
            },
        ],
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
        imgDir: 'assets/images/sw-stuffed-peppers.jpg'
    },
    {
        title: 'White Wine Chicken Scaloppine',
        producer: 'Home Chef',
        ingredients: [
            'Carrots | 8 oz',
            'Asparagus | 12 oz',
            'Garlic Cloves | 2',
            'Roma Tomato | 1',
            'Parsley | 1/4 oz',
            'Boneless Skinless Chicken Breasts | 13 oz',
            'White Cooking Wine | 2 oz',
            'Butter | .6 oz'
        ],
        numSteps: 5,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Peel, trim and cut carrot into 1/4" slices on an angle (if carrot is 1" diameter or larger, halve before slicing). Trim woody ends ' +
                'off asparagus. Mince garlic. Core tomato and cut into 1/4" dice. Stem and mince parsley.'
            },
            {
                name: 'Roast the Vegetables',
                body: 'Place carrot and asparagus on separate havles of prepared baking sheet. Season each with 1 tsp olive oil and a pinch of salt. ' +
                'Spread each into a single layer on their side. Roast until fork-tender, 15-17 minutes. While vegetables roast, prepare chicken.'
            },
            {
                name: 'Pound the Chicken',
                body: 'Pat chicken breasts dry, and drizzle with 1 tsp olive oil. Place chicken breasts in a disposable gallon-size bag. Tip: Gallon bags ' +
                'make clean up easier and are made of thicker plastic. If you don\'t have a disposable bag, use plastic wrap. Using a heavy object, pound ' +
                'chicken to an even 1/4" thickness. Season both sides with a pinch of salt and pepper.'
            },
            {
                name: 'Cook the Chicken',
                body: 'Place a large non-stick pan over medium-high heat and add 2 tsp olive oil. Add chicken to hot pan and cook undisturbed until browned, 2-3 minutes. ' +
                'Lower heat to medium. Flip chicken, and cook until chicken reaches a minimum internal temperature of 165 degrees, 3-5 minutes. Remove chicken to ' +
                'a plate and tent with foil. Reserve pan; no need to wipe clean.'
            },
            {
                name: 'Make the Sauce',
                body: 'Return pan used to cook chicken to medium-high heat. Add 1 tsp olive oil and garlic. Stir constantly until golden and aromatic, ' +
                '30-45 seconds. Add white wine and cook until mostly evaporated, 1-2 minutes. Remove from burner. Stir in tomato, parsley, butter, and ' +
                '1/4 tsp salt. Plate dish as pictured in image, garnishing chicken with sauce. Bon appetit!'
            }
        ],
        nutritionValues: {
            calories: 490,
            fat: 25,
            carbohydrate: 19,
            protein: 42,
            sodium: 1351
        },
        imgDir: 'assets/images/white-wine-chicken-scaloppine.jpg'
    },
    {
        title: 'Curried Catfish & Coconut Rice',
        producer: 'Blue Apron',
        ingredients: [
            'Catfish Fillets | 2',
            'White Basmati Rice | 3/4 cup',
            'Green Beans | 4 oz',
            'Garlic Cloves | 3',
            'Lime | 1',
            'Bunch Cilantro & Mint | 1',
            'Golden Raisins | 3 tbps',
            '1-Inch Piece Ginger | 1',
            'Dried Coconut Flakes | 1/4 cup',
            'Curry Catfish Spice Blend | 2 tbsp',
            'Chutney Spice Blend | 2 tsp'
        ],
        numSteps: 6,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Wash and dry the fresh produce. Peel and mince the garlic. Snap off and discard the stem ends of the green beans; cut into 1/4 inch ' +
                'pieces. Peel and mince the ginger. Pick the cilantro and mint leaves off the stems; discard the stems. Roughly chop the raisins. Quarter the lime.'
            },
            {
                name: 'Make the coconut rice',
                body: 'In a medium pot, heat 2 tsp of olive oil on medium-high until hot. Add the garlic, green beans and half the ginger; season with salt and ' +
                'pepper. Cook, stirring frequently, 1-2 minutes, or until softened and fragrant. Add the rice, a big pinch of salt and 1 1/2 cups of water. Heat ' +
                'to boiling on high. Once boiling, cover and reduce the heat to low. Cook 12 to 14 minutes, or until the water has been absorbed and the rice is ' +
                'tender. Remove from heat. Stir in the coconut flakes and half the cilantro and mint (roughly chopping just before adding); season with salt and ' +
                'pepper to taste.'
            },
            {
                name: 'Make the chutney',
                body: 'While the rice cooks, heat a medium, dry pan (nonstick, if you have one) on medium-high until hot. Add the chutney spice blend and cook, ' +
                'stirring occasionally, 2-4 minutes, or until toasted and fragrant. Add the raisins and remaining ginger; season with salt and pepper. Cook, ' +
                'stirring frequently, 30 seconds to 1 minute, or until the ginger is fragrant. Add 1/2 cup of water and cook, stirringoccasionally, 2-4 minutes, ' +
                'or until the water has cooked off. Turn off the heat. Stir in the juice of 2 lime wedges; season with salt and pepper to taste. Transfer to a ' +
                'bowl. Rinse and wipe out the pan.'
            },
            {
                name: 'Coat the catfish',
                body: 'While the rice continues to cook, place the curry catfish spice blend on a plate. Pat the catfish fillets dry with paper towels; ' +
                'season with salt and pepper on both sides. Thoroughly coat the seasoned fillets in the spice blend (tapping off any excess). Transfer to a plate.'
            },
            {
                name: 'Cook the catfish',
                body: 'In the pan used to make the chutney, heat a thin layer of oil on medium-high until hot. Once the oil is hot enough that a small pinch ' +
                'of spice blend sizzles immediately when added to the pan, add the coated catfish fillets. Cook 3-5 minutes per side, or until golden brown and ' +
                'cooked through. Remove from heat.'
            },
            {
                name: 'Plate your dish',
                body: 'Divide the coconut rice and cooked catfish fillets between 2 dishes. Top the catfish with the chutney. Garnish with the reamining lime ' +
                'wedges and remaining cilantro and mint. Enjoy!'
            }
        ],
        nutritionValues: {
            calories: 600,
        },
        imgDir: 'assets/images/curried-catfish-and-coconut-rice.jpg'
    },
    {
        title: 'Presto Pesto Panko Chicken',
        producer: 'Hello Fresh',
        ingredients: [
            'Yukon Gold Potatoes | 12 oz',
            'Panko Breadcrumbs | 1/2 cup',
            'Mozzarella Cheese | 1/2 cup',
            'Chicken Breasts | 12 oz',
            'Pesto | 2 tbsp',
            'Lemon | 1',
            'Spring Mix Lettuce | 2 oz'
        ],
        numSteps: 6,
        steps: [
            {
                name: 'Preheat and Prep',
                body: 'Wash and dry all produce. Adjust rack to upper position and preheat oven to 450 degrees. Cut potatoes into 1/2 inch cubes.'
            },
            {
                name: 'Roast Potatoes',
                body: 'Toss potatoes on a baking sheet with a drizzle of olive oil and a pinch of salt and pepper. Roast in oven until browned, 20-25 ' +
                'minutes, tossing halfway through.'
            },
            {
                name: 'Make Crust',
                body: 'In a small bowl, mix together panko, mozzarella, a drizzle of olive oil, and a pinch of salt and pepper.'
            },
            {
                name: 'Roast Chicken',
                body: 'Place chicken on another, lightly oiled baking sheet. Brush 1 tbsp pesto onto top of one piece. Repeat with other piece. Cover ' +
                'pesto-brushed sides with crust mixture, pressing to adhere. Roast in oven until chicker is no longer pink in center, about 20 minutes.'
            },
            {
                name: 'Toss Salad',
                body: 'Halve lemon. In a large bowl, toss together lettuce, a squeeze or two of lemon, and a large drizzle of olive oil. Season with salt and pepper.'
            },
            {
                name: 'Plate and Serve',
                body: 'Divide potatoes and chicken between plates. Serve with salad on the side.'
            },
        ],
        nutritionValues: {
            calories: 770,
            fat: 36,
            saturatedFat: 8,
            carbohydrate: 65,
            sugar: 15,
            fiber: 11,
            protein: 51,
            cholesterol: 120,
            sodium: 410
        },
        imgDir: 'assets/images/presto-pesto-panko-chicken.jpg'
    }
]

module.exports = recipedata;