const Query = {

  users: async (parent, args, { UserModel }) => {
    const users = await UserModel.find().sort({ id: -1 });
    return users;
  },

};

export default Query;
