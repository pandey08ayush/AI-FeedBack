import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
  feedback: String,
  createdAt: { type: Date, default: Date.now },
});
const Submission = mongoose.model("Submission",submissionSchema)
export default Submission
 