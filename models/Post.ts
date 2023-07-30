import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  content:{
    type: String,
    required: true,
  }
},{timestamps: true});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
