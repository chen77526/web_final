const newAccount = (db, input) => {
    return new db.AccountModel(input).save();
};

const checkAccount = (db, input) => {
    return db.ChatBoxModel.findOne({ email: input.email, password: input.password });
}

const newCv = (db, input) => {
    return new db.CvModel(input).save();
};

const newResume = (db, input) => {
    return new db.ResumeModel(input).save();
};

// find account by email
const findAccount = async (db, email) => {
    if (!email) throw new Error("Missing email for check account");
    return db.AccountModel.findOne({ email: email });
}

export {
    newAccount,
    findAccount,
    newResume,
    newCv,
    checkAccount,
};