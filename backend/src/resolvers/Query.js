import {checkAccount, findAccount, findPost} from "./utility.js";
const Query = {

  account: async (parent, {email, password}, {db}, info) => {
    
    let account = await checkAccount(db, email, password);
    if (account) return account;
    
  },

  posts: async (parent, {id}, {db}) => {
    return db.PostModel.find({});
  },

  post: async (parent, {id}, {db}) => {
    let post = await findPost(db, id);
    return post;
  },

};

export default Query;
