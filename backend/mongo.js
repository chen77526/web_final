import mongoose from "mongoose";
import "dotenv-defaults/config.js";

async function connect() {

  if (!process.env.MONGO_URL) {
    console.error("Missing MONGO_URL");
    process.exit(1);
  }

  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => {
    throw new Error("DB connection error: " + error);
  })

  db.once("open", () => {
    console.log("Mongo database connected!");
  });
}

export default { connect };