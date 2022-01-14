const Query = {

  accounts: async (parent, args, { AccountModel }) => {
    const accounts = await AccountModel.find().sort({ id: -1 });
    return accounts;
  },

};

export default Query;
