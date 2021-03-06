import mongoose from "mongoose";

const cvSchema = new mongoose.Schema(
  {
    owner: String,
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
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
    confirm: Boolean,
    interested: [String],
    applied: [String]
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

const PostSchema = new mongoose.Schema({
    id: { type: String, unique: true},
    owner: String,
    title: String,
    company: String,
    description: String,
    tags: String,
    limitations: String,
    duedate: Date,
    applicants: [String]
});

const CvModel = mongoose.model("cv", cvSchema);
const AccountModel = mongoose.model("account", accountSchema);
const ResumeModel = mongoose.model("resume", resumeSchema);
const PostModel = mongoose.model("post", PostSchema);

const db = {
  CvModel,
  AccountModel,
  ResumeModel,
  PostModel,
}

export default db;
