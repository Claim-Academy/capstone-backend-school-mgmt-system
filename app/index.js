import { promises as fs } from "fs";
import classes from "../classes.json" assert { type: "json" };

const students = classes
  .map((c) => {
    return c.students;
  })
  .flat();

fs.writeFile("students.json", JSON.stringify(students, null, 2)).then(() => {
  console.info("Done");
});
