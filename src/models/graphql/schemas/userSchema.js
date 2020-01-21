const { GraphQLID, GraphQLString, GraphQLList,
  GraphQLNonNull, GraphQLObjectType, GraphQLSchema } = require('graphql');
const UserType = require('../types/userType');
const objectId = require('mongodb').ObjectId;

const getUserSchema = (User) => new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'UserQuery',
    fields: {
      users: {
        type: GraphQLList(UserType),
        resolve: (root, args, context, info) => {
          // const err = new Error('testing');
          // return {
          //   data: null,
          //   errors: [err]
          // };
          return User.find({});
        }
      },
      userById: {
        type: UserType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve: (root, args, context, info) => {
          try {
            const id = new objectId(args.id);
            return User.findById(id);
          } catch (err) {
            console.log(`err: ${err}`);
            throw new Error('invalid id');
          }
        }
      },
      userByUserName: {
        type: UserType,
        args: {
          username: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: (root, args, context, info) => User.findOne({username: args.username})
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      changeUserName: {
        type: UserType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID)},
          username: { type: GraphQLNonNull(GraphQLString)}
        },
        resolve: async (root, args, context, info) => {
          const updatedInfo = {username: args.username};
          // must set new = true for findByIdAndUpdate to return updated object
          const options = {
            new: true,
            useFindAndModify: false
          };
          return User.findByIdAndUpdate(args.id, updatedInfo, options);
        }
      }
    }
  })
});

module.exports = getUserSchema;
