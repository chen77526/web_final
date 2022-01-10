import { newUser, newAccount} from "./utility.js";

const Mutation = {

  async createUser(parent, {input}, {db}, info) {
    let newUsr = await newUser(db, input);

    return newUsr;
  },

  async updateUser(parent, {id, input}, {db}, info) {
    const user = await db.UserModel.findOneAndUpdate(
      { id },
      {
        $set: {
          id,
          input,
        },
      },
      { returnDocument: "after" }
    );
    pubSub.publish("USER_UPDATED", {
      userUpdated: user,
    });
    return user;
  },

  async createAccount(parent, {input}, {db}, info) {
    let newAcc = await newAccount(db, input);

    return newAcc;
  },
};

export default Mutation;
