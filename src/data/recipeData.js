let recipedata = [
    {
        title: 'Crispy Chipotle Shrimp Tacos',
        producer: 'Hello Fresh',
        ingredients: [
            'Lime | 1',
            'Radishes | 3',
            'Scallions | 2',
            'Shrimp | 10 oz',
            'Red Cabbage | 4 oz',
            'Cornstarch | 2 tbsp',
            'Chipotle Powder | 1 tbsp',
            'Sour Cream | 4 tbsp',
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
            'Golden Raisins | 3 tbsp',
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
                name: 'Make the Coconut Rice',
                body: 'In a medium pot, heat 2 tsp of olive oil on medium-high until hot. Add the garlic, green beans and half the ginger; season with salt and ' +
                'pepper. Cook, stirring frequently, 1-2 minutes, or until softened and fragrant. Add the rice, a big pinch of salt and 1 1/2 cups of water. Heat ' +
                'to boiling on high. Once boiling, cover and reduce the heat to low. Cook 12 to 14 minutes, or until the water has been absorbed and the rice is ' +
                'tender. Remove from heat. Stir in the coconut flakes and half the cilantro and mint (roughly chopping just before adding); season with salt and ' +
                'pepper to taste.'
            },
            {
                name: 'Make the Chutney',
                body: 'While the rice cooks, heat a medium, dry pan (nonstick, if you have one) on medium-high until hot. Add the chutney spice blend and cook, ' +
                'stirring occasionally, 2-4 minutes, or until toasted and fragrant. Add the raisins and remaining ginger; season with salt and pepper. Cook, ' +
                'stirring frequently, 30 seconds to 1 minute, or until the ginger is fragrant. Add 1/2 cup of water and cook, stirringoccasionally, 2-4 minutes, ' +
                'or until the water has cooked off. Turn off the heat. Stir in the juice of 2 lime wedges; season with salt and pepper to taste. Transfer to a ' +
                'bowl. Rinse and wipe out the pan.'
            },
            {
                name: 'Coat the Catfish',
                body: 'While the rice continues to cook, place the curry catfish spice blend on a plate. Pat the catfish fillets dry with paper towels; ' +
                'season with salt and pepper on both sides. Thoroughly coat the seasoned fillets in the spice blend (tapping off any excess). Transfer to a plate.'
            },
            {
                name: 'Cook the Catfish',
                body: 'In the pan used to make the chutney, heat a thin layer of oil on medium-high until hot. Once the oil is hot enough that a small pinch ' +
                'of spice blend sizzles immediately when added to the pan, add the coated catfish fillets. Cook 3-5 minutes per side, or until golden brown and ' +
                'cooked through. Remove from heat.'
            },
            {
                name: 'Plate Your Dish',
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
    },
    {
        title: 'Creamy Dill Chicken',
        producer: 'Hello Fresh',
        ingredients: [
            'Dill | 1/4 oz',
            'Yukon Gold Potatoes | 12 oz',
            'Chicken Breasts | 12 oz',
            'Green Beans | 6 oz',
            'Sour Cream | 2 tbsp',
            'Chicken Stock Concentrate | 1',
            'Dijon Mustard | 1 tsp'
        ],
        numSteps: 6,
        steps: [
            {
                name: 'Prep',
                body: 'Adust racks to upper and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Pick fronds from dill; discard ' +
                'stems. Finely chop fronds. Cut potatoes into 1/2-inch cubes.'
            },
            {
                name: 'Roast Potatoes',
                body: 'Toss potatoes on a baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on top rack, tossing halfway through, until ' +
                'lightly browned and tender, 22-25 minutes.'
            },
            {
                name: 'Cook Chicken',
                body: 'While potatoes roast, pat chicken dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in a large ' +
                'pan over medium heat. Add chicken and cook until browned and cooked through, 4-6 minutes per side. Turn off heat; remove chicken from pan ' +
                'and set aside to rest.'
            },
            {
                name: 'Roast Green Beans',
                body: 'While chicken cooks, toss green beans on another baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on middle rack ' +
                'until tender, 10-12 minutes.'
            },
            {
                name: 'Make Sauce',
                body: 'Add sour cream, stock concentrate, 1sp dill, 1sp mustard and 2 tbsp water to pan used for chicken. Stir off heat, scraping up any ' +
                'browned bits on bottom. Season with salt and pepper. TIP: If sauce seems thick, add more water, 1 tsp at a time, until it has a drizzling ' +
                'consistency.'
            },
            {
                name: 'Plate and Serve',
                body: 'Slice chicken crosswise. Divide chicken, potatoes, and green beans between plates. Drizzle sauce over everything. Garnish with reamining ' +
                'dill (to taste).'
            },
        ],
        nutritionValues: {
            calories: 450,
            fat: 15,
            saturatedFat: 4.5,
            carbohydrate: 36,
            sugar: 6,
            fiber: 6,
            protein: 40,
            cholesterol: 115,
            sodium: 320
        },
        imgDir: 'assets/images/creamy-dill-chicken.jpg'
    },
    {
        title: 'Chicken Scampi Spaghetti',
        producer: 'Home Chef',
        ingredients: [
            'Grated Parmesan | 1 oz',
            'Ciabatta | 1',
            'Garlic Cloves | 4',
            'Lemon | 1',
            'Spaghetti | 5 oz',
            'Boneless Skinless Chicken Breasts | 2',
            'Light Cream | 4 fl oz',
            'Butter | .3 oz'
        ],
        numSteps: 5,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Cut ciabatta into 1" dice. Mince garlic. Zest and halve lemon. Juice half and quarter remaining half. Pat chicken breasts dry, ' +
                'and season both sides with 1/4 tsp salt and 1/4 tsp pepper.'
            },
            {
                name: 'Cook Pasta and Toast Ciabatta',
                body: 'Add pasta to boiling water and cook until al dente, 7-9 minutes. Reserve 1/2 cup pasta cooking water. Drain pasta in a colander. ' +
                'While pasta cooks, place ciabatta pieces on prepared baking sheet and toss with 1 tbsp olive oil. Spread into a single layer and bake until ' +
                'toasted, 8-10 minutes. While ciabatta toasts, cook chicken.'
            },
            {
                name: 'Cook the Chicken',
                body: 'Place a large non-stick pan over medium-high heat and add 1 tbsp olive oil. Add chicken to hot pan and cook until chicken reaches a ' +
                'minimum internal temperature of 165 degrees, 4-5 minutes per side. Remove chicken to a plate. Reserve pan, no need to wipe clean.'
            },
            {
                name: 'Make the Sauce',
                body: 'Return pan used to sear chicken to medium-high heat and add 2 tsp olive oil. Add garlic to hot pan and cook until lightly toasted, ' +
                '30-60 seconds. Add cream, butter, and half the pasta cooking water and bring to a boil. Once boiling, add pasta, 1/4 tsp salt and 1/4 tsp ' +
                'pepper. Stir until pasta is heated through, 1 minute. Remove from burner, if pan is dry, stir in 1-2 tbsp reamining cooking water. Slice ' +
                'chicken into thin slices, and stir into pan with parmesan (reserve a pinch for garnish), 1 tsp lemon juice, and a pinch of salt.'
            },
            {
                name: 'Toss Pasta and Finish Dish',
                body: 'Add ciabatta pieces to pasta and stir to combine. Plate dish as pictured on front of card, garnishing with 1 tsp lemon zest and ' +
                'reserved parmesan. Squeeze lemon wedge over dish to taste. Bon appetit!'
            }
        ],
        nutritionValues: {
            calories: 942,
            fat: 42,
            carbohydrate: 82,
            protein: 57,
            sodium: 1742
        },
        imgDir: 'assets/images/chicken-scampi-spaghetti.jpg'
    },
    {
        title: 'BBQ Pork Burgers',
        producer: 'Blue Apron',
        ingredients: [
            'Ground Pork | 10 oz',
            'Sesame Seed Buns | 2',
            'Ear of Corn | 1',
            'Yellow Onion | 1',
            'Garlic Clove | 1',
            'Bunch Parsley | 1',
            'All-Purpose Flour | 3 tbsp',
            'Pickle Chips | 2 oz',
            'Butter | 2 tbsp',
            'Whole Grain Dijon Mustard | 1 tbsp',
            'BBQ Sauce | 1/4 cup'
        ],
        numSteps: 6,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Remove the butter from the refrigerator to soften. Wash and dry the fresh produce. Heat a medium pot of salted water to boiling on high. ' +
                'Peel the onion and thinly slice into rings; separate the layers and place in a bowl of cold water. Peel and mince the garlic; smash with the side ' +
                'of your knife until it resembles a paste (or use a zester). Finely chop the parsley leaves and stems. Remove and discard the corn husks and silks; ' +
                'halve the cob. Halve the buns.'
            },
            {
                name: 'Make the Garlic-Herb Butter',
                body: 'In a bowl, combine the butter, garlic paste and parsley. Using a fork, mash and stir to thoroughly combine; season with salt and pepper to taste.'
            },
            {
                name: 'Make the Onion Rings',
                body: 'Thoroughly drain the onion; pat dry with paper towels. Transfer to a bowl. Add the flour and toss to thoroughly coat. In a medium pan (nonstick, ' +
                'if you have one), heat a thin layer of oil on medium-high until hot. Once hot enough that a pinch of flour sizzles immediately when added to the pan, ' +
                'working in batches, add the coated onion in a single, even layer. Cook, turning occasionally, 3-4 minutes, or until golden brown and crispy. ' +
                'Transfer to a paper towel-lined plate; immediately season with salt and pepper. Set aside in a warm place. Carefully discard the oil and wipe out the pan.'
            },
            {
                name: 'Form & Cook the Patties',
                body: 'While the onion cooks, in a medium bowl, combine the ground pork (removing and discarding the paper lining from the bottom) and mustard; ' + 
                'season with salt and pepper. Gently mix to combine. Using your hands, form the mixture into two 1/2-inch-thick patties. Transfer to plate. In the ' +
                'same pan, heat 1 tsp of olive oil on medium-high until hot. Add the patties and cook, loosely covering the pan with foil, 3-4 minutes per side, ' +
                'or until browned and cooked through. Transfer to a plate, leaving any browned bits (or fond) in the pan. Loosely cover the cooked patties with foil.'
            },
            {
                name: 'Cook & Dress the Corn',
                body: 'While the patties cook, add the corn to the pot of boiling water and cook 2-3 minutes, or until bright yellow and slightly softened. Drain ' +
                'thoroughly and return to the pot. Off the heat, add the garlic-herb butter and toss to thoroughly coat. Set aside in a warm place.'
            },
            {
                name: 'Toast the Buns & Plate Your Dish',
                body: 'Add 2 tsp of olive oil to the pan of reserved fond; heat on medium-high until hot. Add the buns, cut sides down, and toast 1-2 minutes, or ' +
                'until lightly browned. Transfer to a work surface. Spread half the bbq sauce onto the toasted bun bottoms. Top with the cooked patties, reamining bbq ' +
                'sauce and onion rings. Complete the burgers with the bun tops. Divide the burgers, dressed corn and pickle chips between 2 plates. Enjoy!'
            }
        ],
        nutritionValues: {
            calories: 800,
        },
        imgDir: 'assets/images/bbq-pork-burgers.jpg'
    },
    {
        title: 'Chicken Cheddar Fajitas',
        producer: 'Hello Fresh',
        ingredients: [
            'Bell Pepper | 1',
            'Red Onion | 1',
            'Jalapeno | 1',
            'Lime | 1',
            'Southwest Spice Blend | 1 tbsp',
            'Sour Cream | 2 tbsp',
            'Chicken Breasts | 12 oz',
            'Flour Tortillas | 6',
            'Cheddar Cheese | 1/2 cup'
        ],
        numSteps: 6,
        steps: [
            {
                name: 'Prep',
                body: 'Adjust rack to middle position and preheat oven to 400 degrees. Wash and dry all produce. Core, deseed, and thinly slice bell pepper. ' +
                'Halve, peel, and thinly slice onion. Slice jalapeno into thin rounds, removing ribs and seeds for less heat; place in a small bowl. Zest lime ' +
                'until you have 1/2 tsp zest; cut lime into wedges.'
            },
            {
                name: 'Cook Veggies',
                body: 'Squeeze juice from 2 lime wedges into bowl with jalapeno; toss to coat. Set aside. Heat a drizzle of oil in a large pan over medium-high ' +
                'heat. Add onion, bell pepper, and 1 tsp southwest spice. Cook, stirring, until softened and lightly charred, 4-5 minutes. Season with salt and ' +
                'pepper. Remove from pan and set aside.'
            },
            {
                name: 'Make Crema',
                body: 'Meanwhile, in a second small bowl, combine sour cream, lime zest, and a squeeze or two of lime juice. Stir in water, 1 tsp at a time, ' +
                'until mixture has a drizzling consistency. Season with salt and pepper.'
            },
            {
                name: 'Cook Chicken',
                body: 'Slice chicken into thin strips; season with salt and pepper. Heat a large drizzle of oil in pan used for veggies over medium-high heat. ' +
                'Add chicken in a single layer and cook, stirring occasionally, until lightly browned, 2-4 minutes. Toss in veggies and 1 tsp remaining southwest ' +
                'spice. Continute cooking until chicken is browned and cooked through, 2-3 minutes more.'
            },
            {
                name: 'Bake Tortillas',
                body: 'Meanwhile, place tortillas on a baking sheet in a single layer and sprinkle evenly with cheddar. Bake until cheese has melted, 1-2 minutes. ' +
                'TIP: Don\'t let these sit in the oven too long. The tortillas should be soft, not crisp.'
            },
            {
                name: 'Assemble and Serve',
                body: 'Divide chicken mixture among tortillas. Dollop with crema and scatter pickled jalapeno over (to taste). Serve with any remaining lime wedges ' +
                'on the side for squeezing over.'
            }
        ],
        nutritionValues: {
            calories: 680,
            fat: 31,
            saturatedFat: 12,
            carbohydrate: 57,
            sugar: 6,
            fiber: 4,
            protein: 47,
            cholesterol: 140,
            sodium: 1050
        },
        imgDir: 'assets/images/chicken-cheddar-fajitas.jpg'
    },
    {
        title: 'Baja Fish Tacos',
        producer: 'Home Chef',
        ingredients: [
            'Shallot | 1',
            'Lime | 2',
            'Cilantro | 1/4 oz',
            'Tilapia Fillets | 12 oz',
            'Slaw Mix | 4 oz',
            'Mayonnaise | 1 1/2 oz',
            'Sriracha | 2 tsp',
            'Tempura Mix | 1/3 cup',
            'Canola Oil | 6 fl oz',
            'Small Flour Tortillas | 6'
        ],
        numSteps: 5,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Halve and peel shallot. Slice halves into thin strips. Halve limes and juice three halves. Halve remaining lime piece. Stem cilantro, ' +
                'leaving leaves whole. Pat tilapia fillets dry and, on a separate cutting board, cut into 2" pieces. Season with 1/4 tsp salt and 1/4 tsp pepper.'
            },
            {
                name: 'Quick Pickle Shallot and Make Slaw',
                body: 'Combine shallot, 2 tbsp lime juice, and a pinch of salt in a mixing bowl. In another mixing bowl, combine slaw mix, mayonnaise, sriracha ' +
                '(to taste), and a pinch of salt. Refrigerate both until plating.'
            },
            {
                name: 'Make the Batter',
                body: 'Combine tempura mix and 2 tbsp very cold water in another mixing bowl. Add additional cold water, 1 tbsp at a time, until the consistency is ' +
                'extremely thing, like heavy cream. TIP: The thinner the batter, the better. A thing batter will ensure fish pieces will be crisp, not greasy.'
            },
            {
                name: 'Warm Tortillas and Heat Oil',
                body: 'Place a large non-stick pan over medium-high and add canola oil. Heat oil, 3-5 minutes. While oil heats, wrap tortillas in a damp paper towel ' +
                'and microwave, 30 seconds. Test oil temperature by adding a drop of batter to it. It should sizzle gently. If it browns immediately, turn heat down ' +
                'and let oil cool. If it doesn\'t brown, increase heat.'
            },
            {
                name: 'Cook Fish and Finish Dish',
                body: 'Line a plate with a paper towel. Dip tilapia pieces in batter to cover evenly. Working in batches, carefully add tilapia pieces to hot oil and ' +
                'cook until golden brown and pieces reach a minimum internal temperature of 145 degrees, 2-3 minutes per side. Transfer tilapia to towel-lined plate. ' +
                'Season cooked pieces with a pinch of salt. Plate dish as pictured in dish image, placing tilapia in tortillas and topping with slaw and pickled shallot ' +
                '(to taste). Garnish with cilantro and squeeze lime wedges over to taste. Bon appetit!'
            }
        ],
        nutritionValues: {
            calories: 737,
            fat: 35,
            carbohydrate: 61,
            protein: 42,
            sodium: 1380
        },
        imgDir: 'assets/images/baja-fish-tacos.jpg'
    },
    {
        title: 'Beef & Pepper Tamale Pie',
        producer: 'Home Chef',
        ingredients: [
            'Cornbread Mix | 5 oz',
            'Green Onions | 2',
            'Poblano Pepper | 1',
            'Garlic Cloves | 2',
            'Shredded Cheddar Cheese | 1 oz',
            'Ground Beef | 10 oz',
            'Taco Seasoning | 2 tbsp',
            'Corn Kernels | 3 oz',
            'Worcestershire Sauce | 1 fl oz',
            'Sour Cream | 2 oz'
        ],
        numSteps: 5,
        steps: [
            {
                name: 'Prepare the Ingredients',
                body: 'Trim and thinly slice green onions on an angle, keeping white and green portions separate. Stem poblano pepper, seed, and cut into 1/2" dice. ' +
                'Mince garlic.'
            },
            {
                name: 'Make the Cornbread Batter',
                body: 'Set aside 2 tbsp cornbread mix. Combine remaining cornbread mix with 1/4 cup water, cheddar cheese, and green portions of green onions (reserve ' +
                'a pinch for garnish) in a large mixing bowl. Stir, adding additional water 2 tbsp at a time, until fully combined and a thick, spreadable batter forms.'
            },
            {
                name: 'Start the Filling',
                body: 'Heat a large non-stick pan over medium-high heat. Add ground beef, poblano pepper, taco seasoning, garlic, white portions of green onions, 1/4 tsp ' +
                'salt, and a pinch of pepper to hot pan. Stir occasionally until no pink remains on ground beef, 5-6 minutes.'
            },
            {
                name: 'Finish the Filling',
                body: 'Add corn, reserved 2 tbsp cornbread mix, and worchestershire sauce to pan and cook until vegetables soften, 1-2 minutes. Add 1 cup water. Stir ' +
                'occasionally until slightly thickened, 1-2 minutes.'
            },
            {
                name: 'Bake the Pie',
                body: 'Transfer filling to prepared casserole dish. You may also use a cast iron skillet. Top filling with cornbread batter, using a spatula dipped in ' +
                'water or sprayed with cooking spray to smooth top. Bake in hot oven until cornbread is golden brown, 20-25 minutes. Rest at least 5 minutes to cool slightly ' +
                'and set. Serve family-style, garnish with sour cream and green portions of green onions. Bon appetit!'
            }
        ],
        nutritionValues: {
            calories: 778,
            fat: 38,
            carbohydrate: 71,
            protein: 35,
            sodium: 1654
        },
        imgDir: 'assets/images/beef-tamale-pie.jpg'
    }

]

module.exports = recipedata;