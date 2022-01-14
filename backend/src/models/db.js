import mongoose from "mongoose";

const cvSchema = new mongoose.Schema(
  {
    introduction: String,
    research: String,
    work_experience: String,
    side_project: String,
    others: String,
  }
)

const accountSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true},
    email: String,
    password: String,
    resume: { 
      name: String,
      username: String,
      major: String,
      grade: String,
      cv: { type: mongoose.Types.ObjectId, ref: "Cv" },
    },
    confirm: Boolean
  }
)

const resumeSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    major: String,
    grade: String,
    cv: { type: mongoose.Types.ObjectId, ref: "Cv" },
  }
)

const CvModel = mongoose.model("cv", cvSchema);
const AccountModel = mongoose.model("account", accountSchema);
const ResumeModel = mongoose.model("resume", resumeSchema);

const db = {
  CvModel,
  AccountModel,
  ResumeModel
}

export default db;
