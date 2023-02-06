import { model, mongoose } from "mongoose";
import { studentSchema } from "../student/Student.js";
import { userSchema } from "../user/User.js";

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teacher: userSchema,
  students: [studentSchema],
});

export default model("Class", classSchema);
