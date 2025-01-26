import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  const mongo_uri = process.env.MONGO;
  await mongoose
    .connect(mongo_uri)
    .then(() => {
      console.log("MonGo DB Connected");
    })
    .catch((err) => {
      console.log(`Error Connecting MonGo DB: ${err}`);
    });
};

export default connectDb;
