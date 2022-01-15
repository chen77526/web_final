import { newAccount, newResume, findAccount, newCv, checkAccount, checkId, newPost} from "./utility.js";

const Mutation = {

  // async createUser(parent, {input}, {db}, info) {
  //   let newUsr = await newUser(db, input);

  //   return newUsr;
  // },

  // async updateUser(parent, {id, input}, {db}, info) {
  //   const user = await db.UserModel.findOneAndUpdate(
  //     { id },
  //     {
  //       $set: {
  //         id,
  //         input,
  //       },
  //     },
  //     { returnDocument: "after" }
  //   );
  //   pubSub.publish("USER_UPDATED", {
  //     userUpdated: user,
  //   });
  //   return user;
  // },

  async createAccount(parent, {input}, {db}, info) {
    
    let newAcc = await newAccount(db, input);
    return newAcc;
  },

  async createCv(parent, {id, input}, {db}, info) {
    const account = await findAccount(db, id);
    if(!account) throw new Error("Account id not found: " + email);
    let newC = await newCv(db, input);
    account.resume.cv = newC;
    await account.save();

    return newC;
  },

  async createResume(parent, {id, input}, {db}, info) {
    const account = await findAccount(db, id);
    if(!account) throw new Error("Account id not found: " + id);

    // const newRe = await newResume(db, input);
    account.resume.name = input.name;
    account.resume.username = input.username;
    account.resume.major = input.major;
    account.resume.grade = input.grade;
    
    await account.save();

  },

  async createPost(parent, {id, input}, {db,pubSub}, info) {

    const account = await findAccount(db, id);
    if(!account) throw new Error("Account id not found: " + id);;

    const newPo = await newPost(db, input);
    account.posts.push(newPo);
    await account.save();
    pubSub.publish("POST_CREATED", {
      postCreated: newPo,
    });

    return newPo;
  },

  async setConfirm(parent, {id}, {db}, info) {
    // console.log("id = " + id)
    const account = await checkId(db, id);
    if(!account) throw new Error("Account id not found: " + id);

    account.confirm = true;

    await account.save();
    
  },

  async updateOnline(parent, {email, password}, {db}, info) {

    const account = await checkAccount(db, email, password)
    if(account) {
      console.log("yo")
      account.online = !account.online
      await account.save()
      return(account)
    }
    else return ("User not found!")
  }

};

export default Mutation;
