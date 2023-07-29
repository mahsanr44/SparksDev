import mongoose from "mongoose";

const connect = async () => {
    const mongoURI = process.env.MONGO ?? "mongodb://localhost:27017/fullstack-blog";
    try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;