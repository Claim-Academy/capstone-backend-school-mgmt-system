import { mongoose } from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  present: {
    type: String,
    required: true,
    enum: [
      "Present",
      "Late",
      "Left Early",
      "Excused Absence",
      "Unexcused Absence",
    ],
  },
});

export default attendanceSchema;
