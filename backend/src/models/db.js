import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true},
    name: String,
    username: String,   
    password: String,  
    department: String, 
    grade: String,      
    cv: [{ type: mongoose.Types.ObjectId, ref: "CV" }],           
    // applied_posts: [id!],   
    // interested_posts: [id!], 
  }
)

const cvSchema = new mongoose.Schema(
  {
    Introduction: String,
    research: String,
    work_experience: String,
    side_project: String,
    courses: String,
  }
)

const accountSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true},
    email: String,
    password: String,   
    nickname: String, 
    gender: String
  }
)

const UserModel = mongoose.model("user", userSchema);
const CvModel = mongoose.model("cv", cvSchema);
const AccountModel = mongoose.model("account", accountSchema);

const db = {
  UserModel,
  CvModel,
  AccountModel
}

export default db;
