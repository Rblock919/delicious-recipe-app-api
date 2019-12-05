const { GraphQLID, GraphQLString, GraphQLBoolean, GraphQLObjectType } = require('graphql');
const stringType = { type: GraphQLString };
const boolType = { type: GraphQLBoolean };
const idType = { type: GraphQLID };

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: idType,
    username: stringType,
    password: stringType,
    isAdmin: boolType
  }
});

module.exports = UserType;
