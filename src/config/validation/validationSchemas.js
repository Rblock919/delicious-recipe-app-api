const {checkSchema} = require('express-validator');

const nutritionalInfoSchema = new checkSchema({
  'recipe.nutritionValues.calories': {
    in: ['body'],
    isDate: true,
    errorMessage: 'Calories is NaN'
  }
});

module.exports = nutritionalInfoSchema;
