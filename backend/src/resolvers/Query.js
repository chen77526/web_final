import {checkAccount, findAccount} from "./utility.js";
const Query = {

  account: async (parent, {email, password}, {db}, info) => {
    
    let account = await checkAccount(db, email, password);
    console.log(account);
    if (account) return account;
    
  },

  posts: async (parent, {id}, {db}) => {
    let account = await findAccount(db, id);
    // console.log("fdsfsf");
    return db.PostModel.find({});
  },

};

export default Query;
