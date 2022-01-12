const newAccount = (db, input) => {
    return new db.AccountModel(input).save();
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

export {
    newAccount,
    checkAccount,
    newResume,
    newCv
};