// this is just for seeding purposes, data actually stored in MongoDB
const recipedata = [
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
    preCook: [
      'Paper Towel',
      'Medium Bowl',
      'Large Pan',
      'Splotted Spoon',
      'Small Bowl'
    ],
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
    imgDir: 'assets/images/crispy-chipotle-shrimp-tacos.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Strainer',
      'Medium Bowl',
      'Small Bowl',
      'Large Pan',
      'Paper Towels',
      'Vegetable Oil (2 tsp)'
    ],
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
    imgDir: 'assets/images/pineapple-poblano-beef-tacos.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Small Pot',
      'Large Pan',
      'Baking Sheet'
    ],
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
      cholesterol: 115,
      sodium: 840
    },
    imgDir: 'assets/images/sw-stuffed-peppers.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Preheat oven to 400 degrees',
      'Thoroughly rinse produce and pat dry',
      'Prepare a baking sheet with foil and cooking spray'
    ],
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
    imgDir: 'assets/images/white-wine-chicken-scaloppine.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [],
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
    imgDir: 'assets/images/curried-catfish-and-coconut-rice.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      '2 Baking Sheets',
      'Small Bowl',
      'Large Bowl',
      'Olive Oil (5 tsp)'
    ],
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
    imgDir: 'assets/images/presto-pesto-panko-chicken.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      '2 Baking Sheets',
      'Paper Towels',
      'Large Pan',
      'Vegetable Oil (1 tbsp)'
    ],
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
    imgDir: 'assets/images/creamy-dill-chicken.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Preheat oven to 400 degrees',
      'Bring a large pot of water to a boil',
      'Thoroughly rinse produce and pat dry',
      'Prepare a baking sheet with foil and cooking spray'
    ],
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
    imgDir: 'assets/images/chicken-scampi-spaghetti.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'BBQ Pork Burgers & Corn on the Cob',
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
    preCook: [],
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
    imgDir: 'assets/images/bbq-pork-burgers.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      '2 Small Bowls',
      'Zester',
      'Large Pan',
      'Baking Sheet',
      'Vegetable Oil (1 tbsp)'
    ],
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
    imgDir: 'assets/images/chicken-cheddar-fajitas.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Thoroughly rinse produce and pat dry'
    ],
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
    imgDir: 'assets/images/baja-fish-tacos.jpg',
    favoriters: [],
    raters: {}
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
    preCook: [
      'Preheat oven to 400 degrees',
      'Thoroughly rinse produce and pat dry',
      'Prepare a casserole dish with cooking spray'
    ],
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
    imgDir: 'assets/images/beef-tamale-pie.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Sesame Beef Tacos',
    producer: 'Hello Fresh',
    ingredients: [
      'Persian Cucumber | 1',
      'Radishes | 3',
      'Scallions | 2',
      'Cilantro | 1/4 oz',
      'White Wine Vinegar | 5 tsp',
      'Korean Chili Flakes | 1 tsp',
      'Red Cabbage | 4 oz',
      'Ground Beef | 10 oz',
      'Sour Cream | 4 tbsp',
      'Garlic Powder | 1 tsp',
      'Sesame Oil | 1 tbsp',
      'Soy Sauce | 1 tbsp',
      'Sriracha | 2 tsp',
      'Flour Tortillas | 6'
    ],
    preCook: [
      'Paper Towels',
      'Medium Bowl',
      'Large Pan',
      'Splotted Spoon',
      'Small Bowl',
      'Sugar (2 1/2 tsp)',
      'Vegetable Oil (1 tsp)'
    ],
    steps: [
      {
        name: 'Prep',
        body: 'Wash and dry all produce. Slice radishes and cucumber into thin rounds. Trim and thinly slice scallions. Pick cilantro leaves from ' +
                'stems; discard stems.'
      },
      {
        name: 'Pickle Veggies',
        body: 'In a medium bowl, combine radishes, cucumber, vinegar, 1 tsp sugar, and a pinch of salt and pepper. Taste and add a pinch more sugar ' +
                'if you like sweeter pickles. Set aside, stirring occasionally, until ready to serve.'
      },
      {
        name: 'Make Chili Crema',
        body: 'In a small bowl, combine sour cream and a few chili flakes (to taste- start with a pinch and go up from there, saving a little for the ' +
                'filling). Season with salt and pepper.'
      },
      {
        name: 'Cook Filling',
        body: 'Heat a drizzle of oil in a large pan over medium-high heat. Add scallions and cabbage. Cook, stirring, until softened, 4-5 minutes. Add ' +
                'beef, garlic powder, and 1 tsp sugar(2 tsp for 4 servings). Cook, breaking up meat into pieces, until browned and cooked through, 4-5 minutes. ' +
                'Season with salt, pepper, and up to 1/2 tsp more sugar (to taste). Stir in sesame oil, half the soy sauce, 1 tsp sriracha, and a pinch of chili ' +
                'flakes (to taste). (For 4 servings, use all of the soy saunce.)'
      },
      {
        name: 'Warm Tortillas',
        body: 'While filling cooks, wrap tortillas in a lightly dampened paper towel and microwave until warm and soft, about 30 seconds'
      },
      {
        name: 'Plate and Serve',
        body: 'Spread a bit of chili crema onto each tortilla, then top with filling, a small amount of pickled veggies, cilantro, remaining sriracha ' +
                '(to taste), and reamining chili flakes if desired. Serve with remaining pickled veggies on the side.'
      }
    ],
    nutritionValues: {
      calories: 720,
      fat: 40,
      saturatedFat: 17,
      carbohydrate: 48,
      sugar: 9,
      fiber: 2,
      protein: 32,
      cholesterol: 115,
      sodium: 960
    },
    imgDir: 'assets/images/sesame-beef-tacos.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Creamy Parmesan Steak Penne',
    producer: 'Home Chef',
    ingredients: [
      'Green Onions | 2',
      'Penne Pasta | 5 oz',
      'Yellow Onion | 1',
      'Red Bell Pepper | 1',
      'Garlic Cloves | 2',
      'Steak Strips | 10 oz',
      'Light Cream | 4 fl oz',
      'Grated Parmesan | 1 oz',
      'Red Pepper Flakes | 1/4 tsp'
    ],
    preCook: [
      'Bring 8 cups water and 2 tsp salt to a boil in a medium pot',
      'Thoroughly rinse produce and pat dry'
    ],
    steps: [
      {
        name: 'Cook the Pasta',
        body: 'Once water is boiling, add pasta and cook until al dente, 10-12 minutes. Reserve 1/4 cup pasta cooking water. Drain pasta in a colander and ' +
                'return to pot to keep warm. While pasta cooks, prepare ingredients.'
      },
      {
        name: 'Prepare the Ingredients',
        body: 'Halve and peel onion. Slive halves into thin strips. Stem, seed, remove ribs, and slice red bell pepper into thin strips. Mine garlic. ' +
                'Trim and thinly slice green onions. Pat steak strips dry, and season with 1/4 tsp salt and a pinch of pepper.'
      },
      {
        name: 'Caramelize the Onion',
        body: 'Place a medium non-stick pan over medium-low heat and add 2 tsp olive oil. Add onion and 1/4 tsp salt to hot pan. Stir occasionally until ' +
                'onion is lightly caramelized, 15-20 minutes. Transfer onions to a plate. Reserve pan; no need to wipe clean. While onion caramelizes, cook steak ' +
                'strips and peppers.'
      },
      {
        name: 'Cook the Steak Strips and Peppers',
        body: 'Place a large non-stick pan over medium-high heat and add 2 tsp olive oil. Add steak strips, red bell peppers, and garlic. Stir occasionally ' +
                'until no pink remains on steak strips and peppers are crisp-tender, 5-7 minutes. Stir in reserved pasta water, caramelized onion, green onions ' +
                '(reserve a pinch for garnish), and 1/4 tsp salt. Remove from burner.'
      },
      {
        name: 'Make the Sauce',
        body: 'Add cream to pan used to cook onions. Bring to a boil. Once boiling, remove from burner and stir in parmesan, pasta and 1/4 tsp salt. ' +
                'Stir pasta-sauce mixture into steak strip-peppers mixture. Plate dish, garnishing with reserved green onions and red pepper flakes (to taste). ' +
                'Bon appetit!'
      }
    ],
    nutritionValues: {
      calories: 788,
      fat: 35,
      carbohydrate: 73,
      protein: 46,
      sodium: 1650
    },
    imgDir: 'assets/images/creamy-parmesan-steak-penne.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Turkey White Bean Chili',
    producer: 'Home Chef',
    ingredients: [
      'Shredded Cheddar-Jack Cheese | 2 oz',
      'Cornstarch | 2 tbsp',
      'Crispy Garlic | 1/2 oz',
      'Chicken Demi-Glace | 4 tsp',
      'Chipotle Seasoning | 2 tsp',
      'Green Onions | 2',
      'Sour Cream | 2 oz',
      'Cannellini Beans | 15 oz',
      'Poblano Pepper | 2',
      'Ground Turkey | 12 oz'
    ],
    preCook: [
      'Thoroughly rinse produce and pat dry'
    ],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'Trim and thinly slice green onions, keeping white and green portions separate. Stem poblano peppers, seed, and cut into 1/2" dice. *Wash ' +
                'hands and cutting board after prepping. Poblano peppers can vary in spice level; most are mild, but a few can be quite hot.* Drain and rinse ' +
                'cannellini beans. Combine cornstarch and 2 tbsp cold water in a mixing bowl. Set aside. In another mixing bowl, combine green portions of green ' +
                'onions and sour cream. Set aside.'
      },
      {
        name: 'Cook the Turkey',
        body: 'Place a medium pot over medium high heat and add 2 tsp olive oil. Add ground turkey, seasoning and 1/4 tsp salt to hot pot. Stir occasionally, ' +
                'breaking up with a spoon, until no pink remains, 7-9 minutes. *If using ground pork, use 1 tsp olive oil and add ground pork, seasoning, and 1/4 ' +
                'tsp salt to hot pot. Stir occasionally, breaking up with a spoon. until no pink remains, 5-7 minutes.* Transfer turkey to a plate or bowl. Reserve ' +
                'pot; no need to wipe clean.'
      },
      {
        name: 'Cook the Vegetables',
        body: 'Return pot used to cook turkey to medium heat and add 1 tsp olive oil. Add poblanos, white portions of green onions, and 1/4 tsp salt to hot ' +
                'pot and stir occasionally until tender, 3-5 minutes.'
      },
      {
        name: 'Cook the Chili',
        body: 'Stir cornstarch-water mixture to recombine. Add turkey (or ground pork), beans, 1 cup water, demi-glace, cornstarch-water mixture, and 1/4 tsp ' +
                'salt to pot. Bring to a simmer. Once simmering, cover, and cook until thickened, 5-7 minutes.'
      },
      {
        name: 'Finish the Dish',
        body: 'Plate dish, topping chili with scallion sour cream and cheese and garnishing with crispy garlic. Bon appetit!'
      }
    ],
    nutritionValues: {
      calories: 798,
      fat: 35,
      carbohydrate: 58,
      protein: 55,
      sodium: 1749
    },
    imgDir: 'assets/images/turkey-white-bean-chili.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Crispy Parmesan Chicken',
    producer: 'Hello Fresh',
    ingredients: [
      'Carrots | 4',
      'Scallions | 2',
      'Lemon | 1',
      'Panko Breadcrumbs | 1/4 cup',
      'Parmesan Cheese | 1/4 cup',
      'Hot Smoked Paprika | 1 tsp',
      'Chicken Breasts | 12 oz',
      'Sour Cream | 2 tbsp',
      'Israeli Couscous | 1/2 cup',
      'Garlic Herb Butter | 2 tbsp'
    ],
    preCook: [
      'Medium Pot',
      'Small Bowl',
      'Peeler',
      'Zester',
      'Paper Towels',
      'Baking Sheet',
      'Olive oil (4 tsp)',
      'Strainer'
    ],
    steps: [
      {
        name: 'Prep',
        body: 'Adjust rack to middle position and preheat oven to 425 degrees. Bring a medium pot of salted water to a boil. Wash ' +
                'and dry all produce. Trim and peel carrots, then cut into 2-inch lengths. Trim and thinly slice scallions, separating ' +
                'whites from greens. Zest and quarter lemon.'
      },
      {
        name: 'Bread Chicken',
        body: 'In a small bowl, combine panko, parmesan, paprika, a large drizzle of olive oil, and a pinch of salt and pepper. ' +
                'Pat chicken dry with paper towels; season all over with salt and pepper. Evenly brush one side of each chicken breast with ' +
                'sour cream. Sprinkle panko mixture onto coated sides, pressing to adhere.'
      },
      {
        name: 'Roast Chicken and Carrots',
        body: 'Toss carrots on one side of a baking sheet with a large drizzle of olive oil and a pinch of salt and pepper. Place ' +
                'chicken, crust sides up, on other side of sheet. Roast until chicken is cooked through, about 15 minutes. Remove chicken ' +
                'from sheet and transfer to a plate to rest. Return carrots to oven and roast until tender, about 5 minutes more.'
      },
      {
        name: 'Make Couscous',
        body: 'Meanwhile, once water is boiling, add couscous to pot. Cook until tender, about 6 minutes. Drain thoroughly. Melt ' +
                'garlic herb butter in empty pot over medium heat. Add scallion whites and cook until soft, about 1 minute. Return couscous ' +
                'to pot and stir to coat. Season with salt and pepper if needed.'
      },
      {
        name: 'Finish Carrots',
        body: 'Once carrots are done roasting, remove from oven and toss with lemon zest and juice from 1 lemon wedge.'
      },
      {
        name: 'Serve',
        body: 'Divide chicken, carrots, and couscous between plates. Garnish chicken with scallion greens. Serve with remaining lemon ' +
                'wedges on the side for squeezing over.'
      }
    ],
    nutritionValues: {
      calories: 720,
      fat: 33,
      saturatedFat: 15,
      carbohydrate: 59,
      sugar: 12,
      fiber: 9,
      protein: 46,
      cholesterol: 175,
      sodium: 600
    },
    imgDir: 'assets/images/crispy-parmesan-chicken.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Sausage & Mushroom Stuffed Peppers',
    producer: 'Home Chef',
    ingredients: [
      'Green Bell Peppers | 3',
      'Cremini Mushrooms | 6 oz',
      'Pepperoncini | 2',
      'Italian Sausage Links | 2',
      'Marinara Sauce | 6 fl oz',
      'Shredded Mozzarella | 2 oz'
    ],
    preCook: [
      'Preheat oven to 400 degrees',
      'Thoroughly rinse produce and pat dry',
      'Prepare a baking sheet with foil and cooking spray'
    ],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'Stem green bell peppers, halve lengthwise, and remove seeds and ribs. Cut mushrooms into ¼" slices. Slice pepperoncini into ¼" ' +
                'rounds. Remove Italian sausage from casing.'
      },
      {
        name: 'Begin the Peppers',
        body: 'Place green bell pepper halves on prepared baking sheet and toss with 1 tsp. olive oil and a pinch of pepper. Massage oil into ' +
                'peppers. Arrange pepper halves cut-side down. Roast in hot oven until tender but still crisp, 13-15 minutes. While peppers roast, ' +
                'make filling.'
      },
      {
        name: 'Make the Filling',
        body: 'Heat 1 tsp. olive oil in a medium non-stick pan over medium-high heat. Add Italian sausage to hot pan. Stir occasionally, ' +
                'breaking up with a spoon, until browned, 3-4 minutes. If using ground beef, season with a pinch of salt and stir occasionally until ' +
                'no pink remains, 4-6 minutes. If using ground turkey, season with ¼ tsp. salt and a pinch of pepper and str occasionally until no pink ' +
                'remains, 7-9 minutes. Transfer sausage to a plate. Wipe pan clean, return to stove, and lower heat to medium. Add 1 tsp. olive oil and ' +
                'mushrooms to hot pan. Stir occasionally until lightly brown, 3-4 minutes. Remove from burner. Stir in Italian sausage, marinara, and a ' +
                'pinch of salt.'
      },
      {
        name: 'Finish the Peppers',
        body: 'Carefully, (peppers will be hot!) flip pepper halves cut side up. Distribute filling evenly among pepper halves and top with cheese. ' +
                'Roast until cheese is lightly browned and bubbly, and peppers are fully tender, 9-11 minutes.'
      },
      {
        name: 'Finish the Dish',
        body: 'Plate dish as pictured on front of card, garnishing with pepperoncini (to taste). Bon appétit!'
      }
    ],
    nutritionValues: {
      calories: 528,
      fat: 33,
      carbohydrate: 28,
      protein: 29,
      sodium: 1619
    },
    imgDir: 'assets/images/sausage-mushroom-stuffed-peppers.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Spicy Chicken Grain Bowl',
    producer: 'Blue Apron',
    ingredients: [
      'Chopped Chicken Breasts | 10 oz',
      'Cracked Freekeh | 1/2 cup',
      'Persian Cucumber | 1',
      'Baby Bok Choy | 10 oz',
      'Carrots | 6 oz',
      'Sambal Oelek | 1 tbsp',
      'Mayonnaise | 2 tbsp',
      'Black & White Sesame Seeds | 1 tsp',
      'Sesame Oil | 1 tbsp',
      'Soy Sauce | 1 tbsp',
      'Rice Vinegar | 1 tbsp',
      'Sugar | 1 tbsp',
      'Soy Glaze | 2 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Cook the Freekeh',
        body: 'Fill a medium pot with salted water; cover and heat to boiling on high. Once boiling, add the freekeh and cook, uncovered, 24 to 26 minutes, ' +
                'or until tender. Turn off the heat. Drain thoroughly and return to the pot. '
      },
      {
        name: 'Prepare the Ingredients & Make the Spicy Mayo',
        body: 'While the freekeh cooks, wash and dry the fresh produce. Cut off and discard the root end of the bok choy; thinly slice crosswise. Peel the ' +
                'carrots and grate on the large side of a box grater. Quarter the cucumber lengthwise, then thinly slice crosswise. In a bowl, whisk together the ' +
                'mayonnaise, 2 teaspoons of water, and as much of the sambal oelek as you’d like, depending on how spicy you’d like the mayo to be.'
      },
      {
        name: 'Marinate the Vegetables',
        body: 'While the freekeh continues to cook, in a medium bowl, whisk together the sugar and vinegar; season with salt and pepper. Add the grated ' +
                'carrots and sliced cucumber; stir to combine. Set aside to marinate, stirring occasionally, at least 10 minutes. Taste, then season with salt ' +
                'and pepper if desired.'
      },
      {
        name: 'Cook the Chicken',
        body: 'While the vegetables marinate, pat the chicken dry with paper towels. Place in a bowl; add the soy sauce and stir to coat. In a medium pan ' +
                '(nonstick, if you have one), heat a drizzle of olive oil on medium-high until hot. Add the coated chicken in an even layer. Cook, without stirring, ' +
                '3 to 4 minutes, or until lightly browned. Continue to cook, stirring occasionally, 3 to 4 minutes, or until browned and cooked through. Turn off the heat.'
      },
      {
        name: 'Finish the Freekeh & Serve Dish',
        body: 'Add the sliced bok choy and sesame oil to the pot of cooked freekeh; stir to combine. Taste, then season with salt and pepper if desired. ' +
                'Serve the finished freekeh topped with the cooked chicken, marinated vegetables, soy glaze, spicy mayo, and sesame seeds. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 610,
      fat: 28,
      saturatedFat: 3.5,
      carbohydrate: 57,
      sugar: 23,
      fiber: 9,
      protein: 44,
      cholesterol: 105,
      sodium: 1640
    },
    imgDir: 'assets/images/spicy-chicken-grain-bowl.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Cheesy Mexican-Spiced Chicken',
    producer: 'Blue Apron',
    ingredients: [
      'Boneless Skinless Chicken Breasts | 2',
      'Jasmine Rice | 1/2 cup',
      'Scallions | 2',
      'Green Cabbage | 1/2 lb',
      'Lime | 1',
      'Carrots | 6 oz',
      'Creamy Chipotle Sauce | 2 tbsp',
      'Monterey Jack Cheese | 2 oz',
      'Mexican Spice Blend | 1 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'Wash and dry the fresh produce. Thinly slice the scallions, separating the white bottoms and hollow green tops. Cut out and discard the ' +
                'core of the cabbage; thinly slice the leaves. Peel the carrots and grate on the large side of a box grater. Combine in a large bowl; add the ' +
                'sliced white bottoms of the scallions. Zest the lime to get 1 teaspoon (if you don’t have a zester, use a peeler to remove the green rind of the ' +
                'lime, avoiding the white pith; mince the rind). Quarter the lime. Thinly slice the cheese.'
      },
      {
        name: 'Make the Slaw',
        body: 'To the bowl of prepared vegetables, add the lime zest, creamy chipotle sauce, and the juice of 2 lime wedges; season with salt and pepper. ' +
                'Stir to combine. Set aside to marinate, stirring occasionally, at least 10 minutes. Taste, then season with salt and pepper if desired.'
      },
      {
        name: 'Cook the Rice',
        body: 'While the slaw marinates, in a small pot, combine the rice, a big pinch of salt, and 1 cup of water. Heat to boiling on high. Once boiling, ' +
                'reduce the heat to low. Cover and cook, without stirring, 12 to 14 minutes, or until the water has been absorbed and the rice is tender. Turn off the ' +
                'heat and fluff with a fork.'
      },
      {
        name: 'Cook the Chicken & Serve Dish',
        body: 'While the rice cooks, pat the chicken dry with paper towels; season on both sides with salt, pepper, and enough of the spice blend to coat ' +
                '(you may have extra). In a medium pan (nonstick, if you have one), heat 1 teaspoon of olive oil on medium-high until hot. Add the seasoned chicken ' +
                'and cook 6 to 7 minutes, or until browned. Flip and cook 4 minutes. Carefully top with the sliced cheese. Loosely cover the pan with foil and cook 2 ' +
                'to 3 minutes, or until the cheese is melted and the chicken is cooked through. Turn off the heat. Serve the cooked chicken with the cooked rice and slaw. ' +
                'Garnish with the sliced green tops of the scallions. Serve the remaining lime wedges on the side. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 660,
      fat: 19,
      saturatedFat: 6,
      carbohydrate: 71,
      sugar: 6,
      fiber: 7,
      protein: 53,
      cholesterol: 150,
      sodium: 480
    },
    imgDir: 'assets/images/cheesy-mexican-chicken.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Tomatilla Pork Tacos',
    producer: 'Blue Apron',
    ingredients: [
      'Ground Pork | 10 oz',
      'Flour Tortillas | 4',
      'Radishes | 3 oz',
      'Cabbage | 1/2 lb',
      'Lime | 1',
      'Grated Cotija Cheese | 2 tbsp',
      'Mayonnaise | 2 tbsp',
      'Tomatilla-Poblano Sauce | 1/3 cup',
      'Smoky Spice Blend | 1 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'If you prefer to use an oven to warm the tortillas instead of a microwave, preheat the oven to 375°F. Wash and dry the fresh produce. Cut out ' +
                'and discard the core of the cabbage; thinly slice the leaves. Halve the radishes lengthwise, then thinly slice crosswise. Zest the lime to get 1 ' +
                'teaspoon (if you don’t have a zester, use a peeler to remove the green rind of the lime, avoiding the white pith; mince the rind). Quarter the lime.'
      },
      {
        name: 'Make the Slaw',
        body: 'In a large bowl, whisk together the mayonnaise, lime zest, and the juice of 2 lime wedges. Add the sliced cabbage; season with salt and pepper. ' +
                'Stir to coat. Set aside to marinate, stirring occasionally, at least 10 minutes. Taste, then season with salt and pepper if desired.'
      },
      {
        name: 'Cook the Pork',
        body: 'While the slaw marinates, in a medium pan (nonstick, if you have one), heat a drizzle of olive oil on medium-high until hot. Add the pork and half ' +
                'the spice blend (you will have extra); season with salt and pepper. Cook, stirring frequently and breaking the meat apart with a spoon, 3 to 5 minutes, or ' +
                'until lightly browned. Carefully drain off and discard any excess oil. Add half the tomatillo-poblano sauce (carefully, as the liquid may splatter). Cook, ' +
                'stirring frequently, 2 to 3 minutes, or until the liquid is slightly thickened and the pork is cooked through. Turn off the heat. Taste, then season with ' +
                'salt and pepper if desired. '
      },
      {
        name: 'Warm the Tortillas',
        body: 'While the pork cooks, if using the microwave, wrap the tortillas in a damp paper towel; microwave on high 1 minute, or until heated through. If using ' +
                'the oven, wrap the tortillas in foil and place directly onto an oven rack; warm 7 to 9 minutes, or until heated through. Transfer the warmed tortillas to a ' +
                'work surface and carefully unwrap.'
      },
      {
        name: 'Assemble the Tacos & Serve Dish',
        body: 'Assemble the tacos using the warmed tortillas, cooked pork, sliced radishes, remaining tomatillo-poblano sauce, and cheese. Serve the tacos with the slaw ' +
                'and remaining lime wedges on the side. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 690,
      fat: 43,
      saturatedFat: 12,
      carbohydrate: 44,
      sugar: 8,
      fiber: 6,
      protein: 34,
      cholesterol: 115,
      sodium: 920
    },
    imgDir: 'assets/images/tomatillo-pork-tacos.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Gochujang Beef Lettuce Cups',
    producer: 'Blue Apron',
    ingredients: [
      'Thinly Sliced Beef | 10 oz',
      'Jasmine Rice | 1/2 cup',
      'Butter Lettuce | 1 head',
      'Persian Cucumbers | 2',
      'Scallions | 2',
      'Radishes | 3 oz',
      'Gochujang | 2 tsp',
      'Hoisin Sauce | 2 tbsp',
      'Soy Sauce | 1 tbsp',
      'Sesame Oil | 1 tbsp',
      'Rice Vinegar | 1 tbsp',
      'Black & White Sesame Seeds | 1 tsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Cook the Rice',
        body: 'In a small pot, combine the rice and 1 cup of water. Heat to boiling on high. Once boiling, reduce the heat to low. Cover and cook, without stirring, ' +
                '12 to 14 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff with a fork. Cover to keep warm.'
      },
      {
        name: 'Prepare Ingredients & Make the Glaze',
        body: 'While the rice cooks, wash and dry the fresh produce. Cut off and discard the root end of the lettuce; separate the leaves. Halve the cucumbers lengthwise, ' +
                'then thinly slice crosswise. Halve the radishes lengthwise, then thinly slice crosswise. Combine in a bowl. Thinly slice the scallions, separating the white ' +
                'bottoms and hollow green tops. In a medium bowl, combine the soy sauce, hoisin sauce, and as much of the gochujang as you’d like, depending on how spicy you’d ' +
                'like the dish to be. Taste, then season with salt and pepper if desired.'
      },
      {
        name: 'Marinate the Vegetables',
        body: 'While the rice continues to cook, to the bowl of sliced cucumbers and radishes, add the vinegar and half the sesame oil. Stir to combine. Set aside to ' +
                'marinate, stirring occasionally, at least 5 minutes. Taste, then season with salt and pepper if desired.'
      },
      {
        name: 'Cook & Glaze the Beef',
        body: 'Separate the beef; pat dry with paper towels. Season with salt and pepper. In a medium pan (nonstick, if you have one), heat the remaining sesame oil on ' +
                'medium-high until hot. Add the seasoned beef in an even layer. Cook, without stirring, 2 to 3 minutes, or until lightly browned. Add the sliced white bottoms of ' +
                'the scallions. Cook, stirring frequently, 1 to 2 minutes, or until the beef is just cooked through. Turn off the heat. Transfer to the bowl of glaze and stir to coat.'
      },
      {
        name: 'Assemble the Lettuce Cups & Serve Dish',
        body: 'Stack 2 lettuce leaves on top of each other. Top each stack with the cooked rice, glazed beef, and marinated vegetables (including the liquid). Serve the ' +
                'lettuce cups garnished with the sliced green tops of the scallions and sesame seeds. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 560,
      fat: 13,
      saturatedFat: 2.5,
      carbohydrate: 67,
      sugar: 15,
      fiber: 3,
      protein: 40,
      cholesterol: 85,
      sodium: 1200
    },
    imgDir: 'assets/images/gochujang-beef-lettuce-cups.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Chicken Lettuce Cups',
    producer: 'Blue Apron',
    ingredients: [
      'Chopped Chicken Breast | 10 oz',
      'Sushi Rice | 1/2 cup',
      'Butter Lettuce | 1 head',
      'Persian Cucumbers | 2',
      'Carrots | 6 oz',
      'Gochujang | 2 tsp',
      'Hoisin Sauce | 2 tbsp',
      'Soy Sauce | 1 tbsp',
      'Rice Vinegar | 1 tbsp',
      'Mayonnaise | 2 tbsp',
      'Sugar | 1 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Cook the Rice',
        body: 'In a small pot, combine the rice, a big pinch of salt, and 3/4 cup of water. Heat to boiling on high. Once boiling, reduce the heat to low. Cover and cook, ' +
                'without stirring, 15 to 17 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff with a fork.'
      },
      {
        name: 'Prepare Ingredients & Make the Hoisin Mayo',
        body: 'While the rice cooks, wash and dry the fresh produce. Peel the carrots and thinly slice on an angle. Quarter the cucumbers lengthwise, then thinly slice ' +
                'crosswise. Cut off and discard the root end of the lettuce; separate the leaves. In a bowl, whisk together the hoisin sauce, mayonnaise, and 1 teaspoon of water. ' +
                'Taste, then season with salt and pepper if desired.'
      },
      {
        name: 'Pickle the Carrots',
        body: 'While the rice continues to cook, in a medium pan (nonstick, if you have one), combine the sliced carrots, sugar, vinegar, a big pinch of salt, and 1/4 cup of ' +
                'water. Heat to boiling on high. Once boiling, cook, stirring occasionally, 1 to 2 minutes, or until the sugar has dissolved. Transfer to a heatproof bowl. Stir in as ' +
                'much of the gochujang as you’d like, depending on how spicy you’d like the dish to be. Set aside to cool, stirring occasionally, at least 10 minutes. Rinse and wipe out the pan.'
      },
      {
        name: 'Cook the Chicken',
        body: 'While the carrots cool, pat the chicken dry with paper towels. Place in a bowl; add the soy sauce and season with salt and pepper. Stir to coat. In the same pan, ' +
                'heat 2 teaspoons of olive oil on medium-high until hot. Add the seasoned chicken in an even layer. Cook, without stirring, 3 to 4 minutes, or until lightly browned. ' +
                'Continue to cook, stirring occasionally, 3 to 4 minutes, or until browned and cooked through. Turn off the heat.'
      },
      {
        name: 'Finish & Serve Dish',
        body: 'To the pot of cooked rice, add the sliced cucumbers and pickled carrots (including the liquid). Stir to combine. Stack 2 lettuce leaves on top of each other. ' +
                'Top each stack with the finished rice and cooked chicken. Drizzle with the hoisin mayo. Enjoy!'
      },
      {
        name: 'Make Ahead Modifications',
        body: 'Prepare as directed. Transfer the lettuce leaves and hoisin mayo to separate airtight containers, then cover and refrigerate. Transfer the finished rice and ' +
                'cooked chicken to an airtight container. Cool, uncovered, then cover and refrigerate. Serve as directed (if necessary, stir 1 teaspoon of warm water into the mayo to ' +
                'thin to drizzling consistency). Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 620,
      fat: 19,
      saturatedFat: 2.5,
      carbohydrate: 80,
      sugar: 25,
      fiber: 4,
      protein: 40,
      cholesterol: 105,
      sodium: 1290
    },
    imgDir: 'assets/images/chicken-lettuce-wraps.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Asian Chicken Lettuce Wraps',
    producer: 'Blue Apron',
    ingredients: [
      'Ground Chicken | 10 oz',
      'Chinese Black Rice | 3/4 cup',
      'Butter Lettuce | 1 head',
      'Scallions | 2',
      'Ginger | 1-inch piece',
      'Cilantro | 1 bunch',
      'Lime | 1',
      'Watermelon Radish | 1',
      'Jicama | 1/2 bulb',
      'Sweet Chili Sauce | 3 tbsp',
      'Sesame Oil | 2 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Cook the Rice',
        body: 'Heat a medium pot of salted water to boiling on high. Add the rice and cook 27 to 29 minutes, or until tender. Drain thoroughly and set aside as you ' +
                'continue cooking.'
      },
      {
        name: 'Prepare Ingredients & Make the Hoisin Mayo',
        body: 'While the rice cooks, wash and dry the fresh produce. Trim off and discard the roots of the scallions; thinly slice the scallions, separating the white bottoms ' +
                'and green tops. Peel and mince the ginger. Pick the cilantro leaves off the stems; discard the stems and roughly chop the leaves. Cut off and discard the root of the ' +
                'lettuce, then separate the leaves. Using a peeler, remove the green rind of the lime, avoiding the white pith; mince the rind to get 2 teaspoons of zest. Quarter the ' +
                'lime. Peel the jicama and cut into thin matchsticks. Thinly slice the watermelon radish and place in a bowl of ice water.'
      },
      {
        name: 'Cook the Aromatics',
        body: 'While the rice continues to cook, in a large pan (nonstick, if you have one), heat 2 teaspoons of oil on medium until hot. Add the white bottoms of the scallions ' +
                'and ginger and cook, stirring frequently, 30 seconds to 1 minute, or until fragrant.'
      },
      {
        name: 'Cook the Chicken',
        body: 'Add the chicken and cook, frequently breaking apart with a spoon, 2 to 4 minutes, or until browned and cooked through. Stir in the sweet chili sauce, lime zest, ' +
                'the juice of 1 lime wedge and half the sesame oil. Cook, stirring occasionally, 30 seconds to 1 minute, or until thoroughly combined and heated through. Remove from ' +
                'heat and season with salt and pepper to taste. Set aside in a warm place as you continue cooking.'
      },
      {
        name: 'Make the Salad',
        body: 'Drain and dry the watermelon radishes. Place them in a medium bowl along with the jicama, remaining sesame oil, the juice of the remaining lime wedges and half ' +
                'the cilantro. Season with salt and pepper to taste and toss to thoroughly coat.'
      },
      {
        name: 'Finish & Plate Dish',
        body: 'Add the green tops of the scallions, remaining cilantro and a drizzle of olive oil to the cooked rice. Season with salt and pepper to taste and stir to combine. ' +
                'To plate your dish, place a few lettuce leaves on each plate, fill each with some of the chicken mixture and top with some of the salad. Serve with the dressed ' +
                'forbidden rice on the side. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 640
    },
    imgDir: 'assets/images/asian-chicken-lettuce-wraps.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Buffalo Chicken Lettuce Wraps',
    producer: 'Home Chef',
    ingredients: [
      'Crispy Jalapeños | 1/2 oz',
      'Matchstick Carrots | 3 oz',
      'Blue Cheese | 1/2 oz',
      'Frank\'s Redhot Sauce | 1.5 fl oz',
      'Ranch Dressing | 1.5 fl oz',
      'Butter Lettuce | 1 head',
      'Boneless Skinless Chicken Breasts | 13 oz'
    ],
    preCook: [
      'Thoroughly rinse produce and pat dry'
    ],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'Separate leaves of lettuce for cups.'
      },
      {
        name: 'Cook the Chicken',
        body: 'Bring a small non-stick pan with chicken, ½ cup water, and a pinch of pepper to a boil over medium-high heat. Once boiling, cover and ' +
                'cook until chicken reaches a minimum internal temperature of 165 degrees, 8-10 minutes. Transfer chicken to a plate and let cool. Once cool, ' +
                'shred into bite-sized pieces.'
      },
      {
        name: 'Sauce the Chicken',
        body: 'Place shredded chicken in a mixing bowl and combine with hot sauce (to taste). Set aside.'
      },
      {
        name: 'Make the Carrot Salad',
        body: 'Combine carrot, ranch dressing, and blue cheese (to taste) in another mixing bowl.'
      },
      {
        name: 'Assemble the Lettuce Cups',
        body: 'Plate dish as pictured on front of card, filling lettuce cups with chicken and carrot salad. Garnish with crispy jalapeños (to taste). ' +
                'Bon appétit!'
      }
    ],
    nutritionValues: {
      calories: 411,
      fat: 21,
      carbohydrate: 13,
      protein: 42,
      sodium: 1672
    },
    imgDir: 'assets/images/buffalo-chicken-lettuce-wraps.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Beef Burrito Bowls',
    producer: 'Blue Apron',
    ingredients: [
      'Thinly Sliced Beef | 10 oz',
      'Cracked Freekah | 1/2 cup',
      'Canned Black Beans | 15.5 oz',
      'Sweet Onion | 1',
      'Sweet Peppers | 4 oz',
      'Garlic | 2 cloves',
      'Lime | 1',
      'Sliced Pickled Jalapeño Pepper | 1 oz',
      'Plain Nonfat Greek Yogurt | 1/2 cup',
      'Mexican Spice Blend | 1 tbsp'
    ],
    preCook: [],
    steps: [
      {
        name: 'Cook the Freekah',
        body: 'Fill a medium pot with salted water; cover and heat to boiling on high. Once boiling, add the freekeh. Cook, uncovered, 24 to 26 minutes, or until tender. ' +
                'Turn off the heat. Drain thoroughly and return to the pot.'
      },
      {
        name: 'Prepare the Ingredients & Make the Salsa',
        body: 'While the freekeh cooks, wash and dry the fresh produce. Halve, peel, and thinly slice the onion. Peel and roughly chop 2 cloves of garlic. Drain and rinse ' +
                'the beans. Cut off and discard the stems of the sweet peppers; remove the cores, then medium dice. Quarter the lime. Roughly chop the jalapeño pepper. Thoroughly ' +
                'wash your hands immediately after handling. In a bowl, combine the diced sweet peppers, the juice of 2 lime wedges, 1 teaspoon of olive oil, and as much of the ' +
                'chopped jalapeño pepper as you’d like, depending on how spicy you’d like the salsa to be. Season with salt and pepper.'
      },
      {
        name: 'Cook the Beef & Onion',
        body: 'While the freekeh continues to cook, separate the beef; pat dry with paper towels. Place in a bowl; season with salt, pepper, and enough of the spice blend ' +
                'to coat (you may have extra). Toss to thoroughly coat. In a medium pan (nonstick, if you have one), heat 1 teaspoon of olive oil on medium-high until hot. Add the ' +
                'sliced onion; season with salt and pepper. Cook, stirring occasionally, 3 to 4 minutes, or until slightly softened. Using a spoon, move the onion to one side of the ' +
                'pan. Add the seasoned beef in an even layer to the other side of the pan. Cook, without stirring, 2 to 3 minutes, or until browned. Stir the onion and beef to ' +
                'combine. Cook, stirring occasionally, 1 to 2 minutes, or until the onion is softened and the beef is just cooked through. Leaving any browned bits (or fond) in ' +
                'the pan, transfer to a bowl.'
      },
      {
        name: 'Cook the Beans',
        body: 'In the pan of reserved fond, heat 1 teaspoon of olive oil on medium-high until hot. Add the chopped garlic and cook, stirring constantly, 30 seconds to 1 ' +
                'minute, or until slightly softened. Add the beans and 1 tablespoon of water; season with salt and pepper. Cook, stirring occasionally, 1 to 2 minutes, or until ' +
                'the beans are slightly softened and the water has cooked off. Turn off the heat.'
      },
      {
        name: 'Finish & Serve Dish',
        body: 'While the beans cook, in a bowl, combine the yogurt and the juice of the remaining lime wedges. Season with salt and pepper. To the pot of cooked freekeh, ' +
                'add the cooked beans and 1 teaspoon of olive oil. Season with salt and pepper and stir to combine. Serve the finished freekeh topped with the cooked beef and ' +
                'onion. Garnish with the salsa. Drizzle with the lime yogurt. Enjoy!'
      }
    ],
    nutritionValues: {
      calories: 700,
      fat: 9,
      saturatedFat: 2.5,
      carbohydrate: 87,
      sugar: 11,
      fiber: 18,
      protein: 60,
      cholesterol: 90,
      sodium: 1050
    },
    imgDir: 'assets/images/beef-burrito-bowls.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Beef Sloppy Joe\'s',
    producer: 'Home Chef',
    ingredients: [
      'Green Bell Pepper | 1',
      'Ground Beef | 14 oz',
      'Light Brown Sugar | 1.5 oz',
      'Dark Chili Powder | 2 tsp',
      'Slaw Mix | 5 oz',
      'Sweet Potato | 10 oz',
      'Ketchup | 6 fl oz',
      'Dijon Mustard | 1.5 oz',
      'Apple Cider Vinegar | 3 fl oz',
      'Brioche Bun | 2'
    ],
    preCook: [
      'Preheat oven to 400 degrees',
      'Thoroughly rinse produce and pat dry',
      'Prepare baking sheet with foil or use a nonstick baking sheet'
    ],
    steps: [
      {
        name: 'Prepare the Ingredients',
        body: 'Remove the membrane (spiny white innards) and seeds of bell pepper and chop into a small dice. Peel the sweet potato and slice into ' +
                '¼" thin rounds.'
      },
      {
        name: 'Make the Sweet Potato Chips',
        body: 'In a mixing bowl, combine 2 tsp. olive oil, sweet potato rounds, and season with a pinch of salt and pepper. Combine until chips are ' +
                'evenly coated with oil and spices. Arrange coated chips (with as little overlap as possible) on the prepared baking sheet and put on middle ' +
                'rack of the oven to bake. After 10 minutes, flip chips and bake for another 10 minutes, until browned and crisp. Add a pinch of sea salt to ' +
                'the chips and let cool on the baking sheet so the chips become slightly crisp.'
      },
      {
        name: 'Sauté the Beef & Peppers',
        body: 'While sweet potato chips are baking, in a medium pan over medium-high heat sauté 1 tsp. olive oil and ground beef until no pink remains. ' +
                'Once ground beef is cooked, tip pan and drain excess fat from the meat. Be careful not to drain fat into a garbage disposal (it will clog your ' +
                'drain). Instead, either save the grease for other cooking purposes (it’s great for hash) or discard in the trash. Add the green pepper to the ' +
                'drained ground beef and sauté for 2-3 minutes, or until slightly softened.'
      },
      {
        name: 'Prepare the Sloppy Joe Mixture',
        body: 'Reduce heat to low and add ketchup, 2 Tbsp. of brown sugar (reserving remaining for slaw), Dijon mustard, chili powder to taste, ⅓ of ' +
                'the apple cider vinegar (reserving remaining for slaw) to the ground beef and pepper mixture, stirring occasionally for 2-3 minutes. Stir ' +
                'until completely assimilated. If necessary, add 1 Tbsp. water to thin the sloppy joe sauce.'
      },
      {
        name: 'Prepare the Slaw & Toast Buns',
        body: 'In a mixing bowl, combine the slaw mix, remaining apple cider vinegar, remaining brown sugar, 1 Tbsp. olive oil, and a pinch of salt ' +
                'and pepper. Stir until combined, cover, and place in refrigerator to chill until ready to serve. If desired, add buns to the baking sheet ' +
                'with the sweet potato chips toward the end of their baking cycle and bake for 3-5 minutes for a warm, toasty texture.'
      },
      {
        name: 'Plate the Dish',
        body: 'On a plate, arrange a warmed bun and add a generous serving of the sloppy joe mixture to the bottom portion of the bun.Top sloppy joe ' +
                'mixture with chilled slaw. Arrange sweet potato chips on the side. Add top bun to cap off the sandwich and enjoy.'
      }
    ],
    nutritionValues: {
      calories: 1055,
      fat: 46,
      carbohydrate: 94,
      protein: 67,
      sodium: 1435
    },
    imgDir: 'assets/images/beef-sloppy-joes.jpg',
    favoriters: [],
    raters: {}
  },
  {
    title: 'Hearty Pork Chili',
    producer: 'Hello Fresh',
    ingredients: [
      'Scallions | 4',
      'Kidney Beans | 1 box',
      'Ground Pork | 20 oz',
      'Chicken Stock Concentrate | 2 unit',
      'Cheddar Cheese | 1 cup',
      'Garlic | 4 cloves',
      'Poblano Pepper | 2',
      'Mexican Spice Blend | 2 tbsp',
      'Crushed Tomatoes | 2 box',
      'Sour Cream | 8 tbsp'
    ],
    preCook: [
      '2 tbsp Vegetable Oil',
      'Strainer',
      'Large Pan'
    ],
    steps: [
      {
        name: 'Prep',
        body: 'Wash and dry all produce. Thinly slice scallions, keeping greens and whites separate. Mince or grate garlic. Drain and ' +
                'rinse beans. Core and seed poblanos, then cut into ½-inch squares.'
      },
      {
        name: 'Cook Pork',
        body: 'Heat a drizzle of oil in a large pan over medium-high heat. Add pork and Mexican spice, breaking up meat into pieces. ' +
                'Cook, stirring occasionally, until crisped at the edges and no longer pink, 4-6 minutes. Season with salt and pepper. Remove ' +
                'from pan and set aside.'
      },
      {
        name: 'Sweat Veggies',
        body: 'Add a drizzle of oil, scallion whites, poblanos, and garlic to same pan. Cook, tossing, until lightly browned and softened, ' +
                'about 5 minutes. Season with salt and pepper.'
      },
      {
        name: 'Simmer Chili',
        body: 'Stir stock concentrates, beans, tomatoes, and ½ cup water into pan. Bring to a boil, then lower heat and let simmer until ' +
                'slightly thickened, about 5 minutes. Season with salt and pepper.'
      },
      {
        name: 'Finish Chili',
        body: 'Return pork and any drippings to pan. Simmer until saucy and very thick, about 5 minutes longer.'
      },
      {
        name: 'Plate and Serve',
        body: 'Divide chili between bowls. Sprinkle with cheddar and scallion greens.Dollop with sour cream and serve.'
      },
    ],
    nutritionValues: {
      calories: 660,
      fat: 38,
      saturatedFat: 15,
      carbohydrate: 40,
      sugar: 10,
      fiber: 8,
      protein: 42,
      cholesterol: 135,
      sodium: 1030
    },
    imgDir: 'assets/images/hearty-pork-chili.jpg',
    favoriters: [],
    raters: {}
  }

];

module.exports = recipedata;
