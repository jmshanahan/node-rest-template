import mongoose from "mongoose";
import User from "./user";
import Message from "./message";

// const uri = `mongodb://comeraghsolutions@gmail.com:josephshanahan12@ds137368.mlab.com:37368/rwieruch`;
const uri = `mongodb://joseph:josephshanahan12@ds137368.mlab.com:37368/rwieruch`;
const connectDb = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};
const models = { User, Message };
export { connectDb };

export default models;
