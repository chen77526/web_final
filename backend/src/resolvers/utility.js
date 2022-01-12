import SendEmail from '../email/SendEmail.js';
import EmailTemplate from '../email/EmailTemplate.js';

const newAccount = async(db, input) => {
    input = {...input, confirm: 'false'}
    console.log(input.email)
    await new db.AccountModel(input).save()

    SendEmail(input.email, EmailTemplate.confirm(input.id))
};

const newCv = (db, input) => {
    return new db.CvModel(input).save();
};

const newResume = (db, input) => {
    return new db.ResumeModel(input).save();
};

const checkAccount = async (db, email) => {
    if (!email) throw new Error("Missing email for check account");
    return db.AccountModel.findOne({ email: email });
}

const checkId = async (db, id) => {
    if (!id) throw new Error("Missing id for check account");
    return db.AccountModel.findOne({ id: id });
}

export {
    newAccount,
    checkAccount,
    newResume,
    newCv,
    checkId
};