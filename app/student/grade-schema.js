import { mongoose } from "mongoose";

const gradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  earned: { type: Number, required: true },
  possible: { type: Number, required: true },
});

export default gradeSchema;
