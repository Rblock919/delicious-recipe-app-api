const { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } = require('graphql');
const RecipeType = require('../types/recipeType');

const getRecipeSchema = function (Recipe) {
  console.log('in get recipe schema');
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RecipeQuery',
      fields: {
        recipes: {
          type: GraphQLList(RecipeType),
          resolve: (root, args, context, info) => {
            console.log('in recipes graphql method');
            return Recipe.find({});
          }
        },
        recipeById: {
          type: RecipeType,
          args: {
            id: { type: GraphQLNonNull(GraphQLID) }
          },
          resolve: (root, args, context, info) =>
            Recipe.findById(args.id)
          /* const returnRecipe = await Recipe.findById(args.id);
              // console.log(`raters: ${returnRecipe.raters}`);

              // const keys = Array.from(returnRecipe.raters.keys());
              // const values = Array.from(returnRecipe.raters.values());
              // const keysArr = new Array();
              // const valuesArr = new Array();

              // console.log(`favs: ${returnRecipe.favoriters}`);

              // const returnRaters = new Array();
              // let counter = 0;
              // for (const key of keys) {
              //   keysArr.push(key);
              //   valuesArr.push(values[counter]);
              //   returnRaters.push({
              //     key: key,
              //     value: values[counter]
              //   });
              //   counter++;
              // }
              // console.log(`keys: ${keys}`);
              // console.log(`values: ${values}`);
              // console.log(`returnRaters: ${JSON.stringify(returnRaters)}`);
              // // returnRecipe.raters = returnRaters;
              // const tmp = {
              //   title: returnRecipe.title,
              //   producer: returnRecipe.producer,
              //   ingredients: returnRecipe.ingredients,
              //   preCook: returnRecipe.preCook,
              //   steps: returnRecipe.steps,
              //   nutritionValues: returnRecipe.nutritionValues,
              //   imgDir: returnRecipe.imgDir,
              //   favoriters: returnRecipe.favoriters,
              //   raters: {
              //     keys,
              //     values
              //   }
              // };
              // const tmp2 = {
              //   keys,
              //   values
              // };
              // console.log(`keysArr: ${keysArr} \nvaluesArr: ${valuesArr}`);
              // return returnRecipe; */

        }
      }
    })
  });
};

module.exports = getRecipeSchema;
