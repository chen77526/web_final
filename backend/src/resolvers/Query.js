import {checkAccount, findAccount, findPost, validAccount} from "./utility.js";

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
  resume: async (parent, {id}, {db}) => {
    
    let account = await findAccount(db, id);
    
    return account.resume;
  },

  queryInterested: async(parent, {id}, {db}) => {
    let account = await findAccount(db, id)
    console.log(account.interested)
    var posts = []
    account.interested.map(e => {
      console.log(e)
      posts.push(findPost(db, e))
    })
    console.log(posts)
    return posts
  },

  queryApplied: async(parent, {id}, {db}) => {
    let account = await findAccount(db, id)
    console.log(account.applied)
    var posts = []
    account.applied.map(e => {
      console.log(e)
      posts.push(findPost(db, e))
    })
    console.log(posts)
    return posts
  }

};

export default Query;
