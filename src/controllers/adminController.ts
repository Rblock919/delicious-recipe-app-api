import chalk from 'chalk';
import { ObjectId } from 'mongodb';

const adminController = (User, NewRecipe) => {
  const getUsers = async (req, res) => {
    try {
      const users = await User.find({}, '-__v -password');
      return res.status(200).send(users);
    } catch (err) {
      console.log(chalk.red(err));
      return res.sendStatus(500);
    }
  };

  const updateUsers = async (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const editedUsers = req.body;
    const setToFalseIds = [];
    const setToTrueIds = [];
    let id;
    let counter = 0;
    let proceed = true;

    while (counter < editedUsers.length) {
      try {
        id = new ObjectId(editedUsers[counter]._id);
        if (editedUsers[counter].isAdmin) {
          setToTrueIds.push(id);
        } else {
          setToFalseIds.push(id);
        }
        counter += 1;
      } catch (error) {
        console.log(chalk.red(error));
        proceed = false;
      }
    }

    if (proceed) {
      try {
        if (setToTrueIds.length > 0) {
          await User.updateMany(
            { _id: { $in: setToTrueIds } },
            { $set: { isAdmin: true } }
          );
        }
        if (setToFalseIds.length > 0) {
          await User.updateMany(
            { _id: { $in: setToFalseIds } },
            { $set: { isAdmin: false } }
          );
        }

        return res.sendStatus(200);
      } catch (err) {
        console.log(chalk.red(`Error updating users: ${err}`));
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(500);
    }
  };

  const getApprovalList = async (req, res) => {
    try {
      const recipes = await NewRecipe.find({});
      return res.status(200).send(recipes);
    } catch (err) {
      console.log(chalk.red(err));
      return res.sendStatus(500);
    }
  };

  const getApprovalById = async (req, res) => {
    let id;

    try {
      id = new ObjectId(req.params.id);
      const recipe = await NewRecipe.findById(id);

      return res.status(200).send(recipe);
    } catch (error) {
      console.log(chalk.red(error));
      return res.sendStatus(500);
    }
  };

  return {
    getApprovalList,
    getApprovalById,
    getUsers,
    updateUsers,
  };
};

export default adminController;
