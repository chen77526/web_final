import SendEmail from '../email/SendEmail.js';
import EmailTemplate from '../email/EmailTemplate.js';
import bcrypt from 'bcrypt'

const newAccount = async(db, input) => {
    // console.log(input)
    // console.log(input.password)
    const hash = bcrypt.hashSync(input.password, 10)
    input.password = hash
    // console.log(input.password)
    input = {...input, confirm: 'false', interested: [], applied: []}
    await new db.AccountModel(input).save()

    SendEmail(input.email, EmailTemplate.confirm(input.id))
};

const checkAccount = async (db, email, password) => {
    const account = await db.AccountModel.findOne({ email: email})
    if(!account) return null
    // return account
    if(bcrypt.compareSync(password, account.password)){
        return db.AccountModel.findOne({ email: email})
    }
    else return null
}

const validAccount =  async(db, email) => {
    const account = await db.AccountModel.findOne({ email: email});
    if(!account) return null;
    else return account;
}

const findResume = async(db, id) => {
    const account = await db.AccountModel.findOne({ id: id });
    const cv = await db.CvModel.findOne({_id: account.resume.cv})
    return {...account.resume, cv:cv};
}

const newCv = (db, input) => {
    return new db.CvModel(input).save();
};

const newResume = (db, input) => {
    return new db.ResumeModel(input).save();
};

const newPost = (db, input) => {
    return new db.PostModel(input).save();
};

// find account by email
const findAccount = async (db, id) => {
    if (!id) throw new Error("Missing id for check account");
    return db.AccountModel.findOne({ id: id });
};

const findPost = async (db, id) => {
    if (!id) throw new Error("Missing id for check post");
    return db.PostModel.findOne({ id: id });
}

const checkId = async (db, id) => {
    if (!id) throw new Error("Missing id for check account");
    return db.AccountModel.findOne({ id: id });
};

const findResume = async (db, id) => {
    const account = await db.AccountModel.findOne({ id: id});
    return account.resume;
}

export {
    newAccount,
    newResume,
    newPost,
    newCv,
    findAccount,
    findPost,
    findResume,
    checkAccount,
    checkId,
    validAccount,
    findResume
};