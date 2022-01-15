import SendEmail from '../email/SendEmail.js';
import EmailTemplate from '../email/EmailTemplate.js';

const newAccount = async(db, input) => {
    input = {...input, confirm: 'false'}
    await new db.AccountModel(input).save()

    SendEmail(input.email, EmailTemplate.confirm(input.id))
};

const checkAccount = (db, email, password) => {
    return db.AccountModel.findOne({ email: email, password: password });
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

export {
    newAccount,
    newResume,
    newPost,
    newCv,
    findAccount,
    findPost,
    checkAccount,
    checkId
};