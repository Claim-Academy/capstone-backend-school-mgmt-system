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
};

const newStudent = await controller.register("John", "Doe").catch((err) => {
  console.error(err.message);
});

console.log(newStudent);

export default controller;
