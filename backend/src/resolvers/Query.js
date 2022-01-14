import {checkAccount} from "./utility.js";
const Query = {

  async account(parent, {email, password}, {db}, info) {
    
    let account = await checkAccount(db, email, password);
    if (!account) throw new Error ("Account does not exist!!");
    return account;
    
  },

  posts: async (parent, {email, password}, {db}) => {
    let account = await checkAccount(db, email, password);
    if (!account) throw new Error ("Account does not exist!!");
    return account.posts;
  },

};

export default Query;
