<<<<<<< HEAD
import {checkAccount, findAccount, findPost} from "./utility.js";
=======
import {checkAccount, findAccount, findResume} from "./utility.js";
>>>>>>> ahong
const Query = {

  account: async (parent, {email, password}, {db}, info) => {
    
    let account = await checkAccount(db, email, password);
    // console.log(account);
    if (account) return account;
    
  },

  posts: async (parent, {id}, {db}) => {
    return db.PostModel.find({});
  },

<<<<<<< HEAD
  post: async (parent, {id}, {db}) => {
    let post = await findPost(db, id);
    return post;
=======
  resume: async (parent, {id}, {db}) => {
    
    let account = await findAccount(db, id);
    
    return account.resume;
>>>>>>> ahong
  },

};

export default Query;
