import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";
import attendance from "./seed/attendance.js";
import classNamesDescriptions from "./seed/class-names-descriptions.js";
import teachers from "./seed/teachers.js";
import { getRandomIntInclusive } from "./utils.js";

const classes = classNamesDescriptions.map((classObj, index) => {
  // Just get the teacher object from the teachers array using the class index
  const teacher = teachers[index];

  // Create an array of 5 students
  const students = Array.from({ length: 5 }, () => {
    return {
      _id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      present: attendance,
      grades: [
        {
          name: "Homework 1",
          date: "2020-01-09",
          earned: getRandomIntInclusive(5, 10),
          possible: 10,
        },
        {
          name: "Homework 2",
          date: "2020-01-10",
          earned: getRandomIntInclusive(5, 10),
          possible: 10,
        },
        {
          name: "Homework 3",
          date: "2020-01-11",
          earned: getRandomIntInclusive(5, 10),
          possible: 10,
        },
        {
          name: "Quiz 1",
          date: "2020-01-12",
          earned: getRandomIntInclusive(10, 20),
          possible: 20,
        },
        {
          name: "Exam 1",
          date: "2020-01-13",
          earned: getRandomIntInclusive(20, 50),
          possible: 50,
        },
      ],
    };
  });

  return {
    name: classObj.name,
    description: classObj.description,
    teacher,
    students,
  };
});

fs.writeFile("./classes.json", JSON.stringify(classes, null, 2)).then(() => {
  console.info("done");
});
