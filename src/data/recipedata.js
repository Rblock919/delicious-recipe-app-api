var recipes = [
    {
        title: 'Crispy Chipotle Shrimp Tacos',
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
            body: 'Was and dry all produce. Cut lime into wedges. Halve radishes, then slice into thin half-moons. Trim, then thinly slice scallions, keeping greens'
            + ' and whites separate. Rinse shrimp under cool running water and pat dry with a paper towel.'
        },
        step2: {
            name: 'Toss Slaw',
            body: 'Toss cabbage and scallion whites in a medium bowl with a squeeze of lime, a drizzle of olive oil, salt, and pepper. Set aside.'
        },
        step3: {
            name: 'Coat Shrimp',
            body: 'Heat a 1/4 inch layer of oil in a large pan over high heat (use nonstick if possible). Meanwhile, place shrimp, cornstarch, and '
            + '1/4 tsp chipotle powder in another medium bowl (we\'ll use more chipotle in step 5). Season with salt and pepper, Toss until shrimp are'
            + ' thoroughly coated.'
        },
        step4: {
            name: 'Cook Shrimp',
            body: 'Add shrimp to pan in a single layer and cook until golden brown and crisp, about 2 minutes per side. Remove from pan with a slotted spoon'
            + ' and set aside on a paper-towel-lined plate. Season with salt and pepper.'
        },
        step5: {
            name: 'Make Crema and Warm Tortillas',
            body: 'In a small bowl, stir together sour cream, a squeeze of lime, and a pinch of chipotle powder (use more to taste). Season with salt and pepper'
            + '. Add enough water to create a drizzly consistency (about 1 TBSP). Wrap tortillas in a lightly dampened paper towel and microwave until warm and soft,'
            + ' about 30 seconds'
        },
        step6: {
            name: 'Finish and Serve',
            body: 'Divide slaw, shrimp, and radishes between tortillas. Drizzle with crema, sprinkle with scallion greens, and serve with any remaining lime wedges'
            + ' for squeezing over.'
        },
        nutritionValues: {
            calories: 580,
            fat: 27,
            saturated_fat: 5,
            carbohydrate: 52,
            sugar: 7,
            fiber: 6,
            protein: 36,
            cholesterol: 235,
            sodium: 700
        }
    }
]

module.exports = recipes;