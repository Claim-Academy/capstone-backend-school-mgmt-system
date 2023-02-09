import { model, mongoose } from "mongoose";
import AttendanceSchema from "./attendance-schema.js";
import GradeSchema from "./grade-schema.js";

export const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    attendance: [AttendanceSchema],
    grades: [GradeSchema],
  },
  { versionKey: false }
);

export default model("Student", studentSchema);
