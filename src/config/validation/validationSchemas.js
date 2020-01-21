const { checkSchema } = require('express-validator');
const objectId = require('mongodb').ObjectId;

// TODO: possibly remove parseInt from this function since it's already being executed in sanitizer
const nutritionValidator = function optionalNutritionInfo(value, {req, location, path}) {
  const homeChefFields = ['fat', 'carbohydrate', 'protein', 'sodium'];
  const nonHomeChefFields = ['saturatedFat', 'fiber', 'cholesterol', 'sugar'];
  const field = path.split('.').pop();

  if (value !== '') {

    if (req.body.recipe.producer !== 'Home Chef') {
      if (nonHomeChefFields.indexOf(field) > -1) {
        // console.log(`evaluating field: ${field}`);
        try {
          const parsedValue = parseInt(value);
          return (!(isNaN((parsedValue))));
        } catch (e) {
          return false;
        }
      }
    }
    if (homeChefFields.indexOf(field) > -1) { // blue apron with info and hello fresh both still have these fields so validate them regardless
      // console.log(`evaluating field: ${field}`);
      try {
        const parsedValue = parseInt(value);
        return (!(isNaN((parsedValue))));
      } catch (e) {
        return false;
      }
    }

  } else {
    // console.log(`no value given for ${field}`);
    return true;
  }

  // console.log('location: ' + location); // body
  // console.log('path: ' + path); // what comes after body
};

const nutritionSanitizer = function(value, {req, location, path}) {
  // console.log(`value in nutrition sanitizer: ${value}`);
  if (value !== '') {
    try {
      return parseInt(value);
    } catch (err) {
      return ''; // return a string that will get flagged by validator
    }
  } else {
    return value;
  }
};

const producerValidator = function(value, {req, location, path}) {
  return !!(value && value !== '' && (value === 'Blue Apron' || value === 'Home Chef' || value === 'Hello Fresh'));
};

const producerSanitizer = function(value, {req, location, path}) {
  return (value !== 'Blue Apron' && value !== 'Hello Fresh' && value !== 'Home Chef') ? '' : value;
};

const favoritersValidator = function(value, {req, location, path}) {
  let i = value.length;
  while (i--) {
    try {
      new objectId(value[i]);
    } catch (err) {
      return false;
    }
  }
  return true;
};

const raterValidator = function(value, {req, location, path}) {
  for (const rater of Object.keys(value)) {
    try {
      new objectId(rater);
      if (value[rater] <  0 || value[rater] > 5) {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  return true;
};

const titleValidator = function(value, {req, location, path}) {
  let i = value.length;
  while (i--) {
    if (value[i] === '$' || value[i] === '{' || value[i] === '}') {
      return false;
    }
  }
  return true;
};

const recipeSchema = new checkSchema({
  'recipe.title': {
    in: ['body'],
    custom: {
      options: titleValidator
    },
    errorMessage: 'title is not valid.'
  },
  'recipe.favoriters': {
    in: ['body'],
    custom: {
      options: favoritersValidator
    },
    errorMessage: 'favoriters is not valid.'
  },
  'recipe.raters': {
    in: ['body'],
    custom: {
      options: raterValidator
    },
    errorMessage: 'raters in not valid.'
  },
  'recipe.producer': {
    in: ['body'],
    customSanitizer: {
      options: producerSanitizer
    },
    custom: {
      options: producerValidator
    },
    errorMessage: 'Producer is not valid.'
  },
  'recipe.nutrition.calories': {
    in: ['body'],
    isInt: true,
    toInt: true,
    errorMessage: 'Calories is not an integer.'
  },
  'recipe.nutrition.fat': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Fat is not an integer.'
  },
  'recipe.nutrition.protein': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Protein is not an integer.'
  },
  'recipe.nutrition.carbohydrate': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Carbohydrates is not an integer.'
  },
  'recipe.nutrition.sodium': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Sodium is not an integer.'
  },
  'recipe.nutrition.saturatedFat': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Saturated Fat is not an integer.'
  },
  'recipe.nutrition.cholesterol': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Cholesterol is not an integer.'
  },
  'recipe.nutrition.sugar': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Sugar is not an integer.'
  },
  'recipe.nutrition.fiber': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer
    },
    custom: {
      options: nutritionValidator
    },
    errorMessage: 'Fiber is not an integer.'
  }
});

module.exports = recipeSchema;

