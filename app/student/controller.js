import mongoose from "mongoose";
import config from "../config.js";
import Student from "./Student.js";

mongoose.set("strictQuery", true);
mongoose
  .connect(config.dbConn)
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

const controller = {
  index() {
    return Student.find();
  },

  show(id) {
    return Student.findById(id);
  },

  async register(firstName, lastName) {
    const students = await this.index();

    const existingStudentWithSameName = students.find(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    );

    if (existingStudentWithSameName) {
      throw new Error(
        `Student with name ${firstName} ${lastName} already exists`
      );
    }

    const student = new Student({ firstName, lastName });
    return student.save();
  },

  async markAttendance(id, attendanceMark) {
    const student = await this.show(id);

    if (!student) {
      throw new Error(`Student with id ${id} does not exist`);
    }

    const existingAttendanceI = student.attendance.findIndex(
      (a) => a.date.getTime() === attendanceMark.date.getTime()
    );

    existingAttendanceI >= 0
      ? (student.attendance[existingAttendanceI] = attendanceMark)
      : (student.attendance = [...student.attendance, attendanceMark]);

    return student.save();
  },

  // 'newName' is an object with the new first and last name
  async updateName(id, newName) {
    const existingStudent = await Student.findById(id);

    if (!existingStudent) {
      throw new Error(`Student with id ${id} does not exist`);
    }

    // Use the || operator to only update the fields that are provided
    existingStudent.firstName = newName.firstName || existingStudent.firstName;
    existingStudent.lastName = newName.lastName || existingStudent.lastName;

    return existingStudent.save();
  },
};

const updatedStudent = await controller
  .markAttendance("63e1356d9f728febcf837663", {
    date: new Date("2022-01-09"),
    present: "Excused Absence",
  })
  .catch((err) => {
    console.error(err.message);
  });

console.log(updatedStudent);

export default controller;
