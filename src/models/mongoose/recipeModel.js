const getRecipeModels = function(mongoose) {
  const Schema = mongoose.Schema;

  const recipeModel = new Schema({
    title: {
      type: String
    },
    producer: {
      type: String
    },
    ingredients: [
      {
        name: String,
        amount: String
      }
    ],
    preCook: [
      String
    ],
    steps: [
      {
        _id: false,
        name: String,
        body: String
      }
    ],
    nutritionValues: {
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
    },
    imgDir: {
      type: String
    },
    favoriters: [
      String
    ],
    raters: {
      type: Map,
      of: Number
    }
  });

  return {
    NewRecipe: mongoose.model('approvalList', recipeModel),
    Recipe: mongoose.model('recipe', recipeModel)
  };
};

module.exports = getRecipeModels;
