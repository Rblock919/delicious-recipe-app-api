// const { checkSchema } = require('express-validator');
import { checkSchema } from 'express-validator';

const objectId = require('mongodb').ObjectId;

// TODO: possibly remove parseInt from this function since it's already being executed in sanitizer
const nutritionValidator = function optionalNutritionInfo(
  value,
  { req, location, path }
) {
  const homeChefFields = ['fat', 'carbohydrate', 'protein', 'sodium'];
  const nonHomeChefFields = ['saturatedFat', 'fiber', 'cholesterol', 'sugar'];
  const field = path.split('.').pop();

  if (value !== null) {
    if (req.body.recipe.producer !== 'Home Chef') {
      if (nonHomeChefFields.indexOf(field) > -1) {
        console.log(`evaluating field: ${field}`);
        try {
          const parsedValue = parseInt(value, 10);
          return !isNaN(parsedValue);
        } catch (e) {
          return false;
        }
      }
    }
    if (homeChefFields.indexOf(field) > -1) {
      // blue apron with info and hello fresh both still have these fields so validate them regardless
      console.log(`evaluating field: ${field}`);
      try {
        const parsedValue = parseInt(value, 10);
        return !isNaN(parsedValue);
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  // console.log(`no value given for ${field}`);
  return true;

  // console.log('location: ' + location); // body
  // console.log('path: ' + path); // what comes after body
};

const nutritionSanitizer = (value, { req, location, path }) => {
  // console.log(`value in nutrition sanitizer: ${value}`);
  if (value !== null) {
    try {
      return parseInt(value, 10);
    } catch (err) {
      return ''; // return a string that will get flagged by validator
    }
  } else {
    return value;
  }
};

const producerValidator = (value, { req, location, path }) => {
  return !!(
    value &&
    value !== '' &&
    (value === 'Blue Apron' || value === 'Home Chef' || value === 'Hello Fresh')
  );
};

const producerSanitizer = (value, { req, location, path }) => {
  return value !== 'Blue Apron' &&
    value !== 'Hello Fresh' &&
    value !== 'Home Chef'
    ? ''
    : value;
};

const favoritersValidator = (value, { req, location, path }) => {
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

const raterValidator = (value, { req, location, path }) => {
  for (const rater of Object.keys(value)) {
    try {
      new objectId(rater);
      if (value[rater] < 0 || value[rater] > 5) {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  return true;
};

const titleValidator = (value, { req, location, path }) => {
  let i = value.length;
  while (i--) {
    if (value[i] === '$' || value[i] === '{' || value[i] === '}') {
      return false;
    }
  }
  return true;
};

// @ts-ignore
const recipeSchema = new checkSchema({
  'recipe.title': {
    in: ['body'],
    custom: {
      options: titleValidator,
    },
    errorMessage: 'title is not valid.',
  },
  'recipe.favoriters': {
    in: ['body'],
    custom: {
      options: favoritersValidator,
    },
    errorMessage: 'favoriters is not valid.',
  },
  'recipe.raters': {
    in: ['body'],
    custom: {
      options: raterValidator,
    },
    errorMessage: 'raters in not valid.',
  },
  'recipe.producer': {
    in: ['body'],
    customSanitizer: {
      options: producerSanitizer,
    },
    custom: {
      options: producerValidator,
    },
    errorMessage: 'Producer is not valid.',
  },
  'recipe.nutritionValues.calories': {
    in: ['body'],
    isInt: true,
    toInt: true,
    errorMessage: 'Calories is not an integer.',
  },
  'recipe.nutritionValues.fat': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Fat is not an integer.',
  },
  'recipe.nutritionValues.protein': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Protein is not an integer.',
  },
  'recipe.nutritionValues.carbohydrate': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Carbohydrates is not an integer.',
  },
  'recipe.nutritionValues.sodium': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Sodium is not an integer.',
  },
  'recipe.nutritionValues.saturatedFat': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Saturated Fat is not an integer.',
  },
  'recipe.nutritionValues.cholesterol': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Cholesterol is not an integer.',
  },
  'recipe.nutritionValues.sugar': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Sugar is not an integer.',
  },
  'recipe.nutritionValues.fiber': {
    in: ['body'],
    customSanitizer: {
      options: nutritionSanitizer,
    },
    custom: {
      options: nutritionValidator,
    },
    errorMessage: 'Fiber is not an integer.',
  },
});

// module.exports = recipeSchema;
export default recipeSchema;
