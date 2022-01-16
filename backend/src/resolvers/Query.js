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
    let account = await findAccount(db,id)
    const lim = account.email[3]+account.email[4]+account.email[5]
    return db.PostModel.find({limitations: 0});
  },

  post: async (parent, {id}, {db}) => {
    let post = await findPost(db, id);
    return post;
  },
  resume: async(parent, {id}, {db}) => {
    let resume = await findResume(db, id);
    return resume;
  },

  queryInterested: async(parent, {id}, {db}) => {
    let account = await findAccount(db, id)
    console.log(account.interested)
    var posts = []
    account.interested.map(e => {
      // console.log(e)
      posts.push(findPost(db, e))
    })
    // console.log(posts)
    return posts
  },

  queryApplied: async(parent, {id}, {db}) => {
    var account = await findAccount(db, id)
    console.log("account.applied" + account.applied)
    var posts = []
    account.applied.map(e => {
      // console.log(e)
      posts.push(findPost(db, e))
    })
    // console.log(posts)
    return posts
  },

  queryApplicants: async(parent, {id}, {db}) => {
    let post = await findPost(db, id)
    var posts = []
    post.applicants.map(e => {
      // console.log(e)
      posts.push(findAccount(db, e))
    })
    console.log(posts)
    return posts
  },

  queryOwnPost: async(parent, {id}, {db}) => {
    let account = await findAccount(db, id)
    var ownposts = []
    account.posts.map( async(e) => {
      ownposts.push(db.PostModel.findOne({"_id": e}))
    })
    return ownposts
  },

  queryLimitPost: async(parent, {uid}, {db}) => {
    let account = await findAccount(db, uid)
    const lim = account.email[3]+account.email[4]+account.email[5]
    // console.log(lim)
    return db.PostModel.find({ limitations: lim })
  }

};

export default Query;
