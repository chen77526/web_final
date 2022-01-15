import {checkAccount, findAccount, findPost, validAccount, findResume} from "./utility.js";
const Query = {

  account: async (parent, {email, password}, {db}, info) => {
    
    let account = await checkAccount(db, email, password);
    // console.log(account);
    if (account) return account;
    
  },

  checkaccount: async (parent, {email}, {db}, info) => {
    
    let account = await validAccount(db, email);
    return account;
    
  },

  posts: async (parent, {id}, {db}) => {
    return db.PostModel.find({});
  },


  post: async (parent, {id}, {db}) => {
    let post = await findPost(db, id);
    return post;
  },

  resume: async(parent, {id}, {db}) => {
    let resume = await findResume(db, id);
    return resume;
  }

};

export default Query;
