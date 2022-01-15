import {checkAccount, findAccount, findResume} from "./utility.js";
const Query = {

  account: async (parent, {email, password}, {db}, info) => {
    
    let account = await checkAccount(db, email, password);
    if (account) return account;
    
  },

  posts: async (parent, {id}, {db}) => {
    return db.PostModel.find({});
  },

  resume: async (parent, {id}, {db}) => {
    
    let account = await findAccount(db, id);
    
    return account.resume;
  },

};

export default Query;
