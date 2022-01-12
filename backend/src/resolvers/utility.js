const newUser = (db, input) => {
    return new db.UserModel(input).save();
};

const newAccount = (db, input) => {
    console.log(input)
    return new db.AccountModel(input).save();
};

export {
    newUser,
    newAccount
};