const { GraphQLID, GraphQLInt, GraphQLFloat,
  GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const stringType = { type: GraphQLString };
const intType = { type: GraphQLInt };
const floatType = { type: GraphQLFloat };
const idType = { type: GraphQLID };

const StepType = new GraphQLObjectType({
  name: 'Step',
  fields: {
    name: stringType,
    body: stringType
  }
});

const NutritionValuesType = new GraphQLObjectType({
  name: 'NutritionValues',
  fields: {
    calories: intType,
    fat: intType,
    saturatedFat: floatType,
    carbohydrate: intType,
    sugar: intType,
    fiber: intType,
    protein: intType,
    cholesterol: intType,
    sodium: intType
  }
});

// Replicate a map
const RatersType = new GraphQLObjectType({
  name: 'Raters',
  fields: {
    keys: { type: GraphQLList(GraphQLString)},
    values: { type: GraphQLList(GraphQLInt)}
  }
});

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  fields: {
    _id: idType,
    title: stringType,
    producer: stringType,
    ingredients: { type: GraphQLList(GraphQLString) },
    preCook: { type: GraphQLList(GraphQLString) },
    steps: { type: GraphQLList(StepType) },
    nutritionValues: { type: NutritionValuesType },
    imgDir: stringType,
    favoriters: { type: GraphQLList(GraphQLString) },
    raters: { type: RatersType }
  }
});

module.exports = RecipeType;
