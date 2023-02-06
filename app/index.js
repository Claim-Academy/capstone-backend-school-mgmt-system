import { promises as fs } from "fs";
import teachers from "./seed/teachers.js";

fs.writeFile("teachers.json", JSON.stringify(teachers, null, 2)).then(() => {
  console.info("Done");
});
