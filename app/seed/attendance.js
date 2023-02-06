import { getRandomIntInclusive } from "../utils.js";

const statuses = [
  "Present",
  "Late",
  "Left Early",
  "Excused Absence",
  "Unexcused Absence",
];

export default [
  {
    date: "2022-01-09",
    present: statuses[getRandomIntInclusive(0, statuses.length - 1)],
  },
  {
    date: "2022-01-10",
    present: statuses[getRandomIntInclusive(0, statuses.length - 1)],
  },
  {
    date: "2022-01-11",
    present: statuses[getRandomIntInclusive(0, statuses.length - 1)],
  },
  {
    date: "2022-01-12",
    present: statuses[getRandomIntInclusive(0, statuses.length - 1)],
  },
  {
    date: "2022-01-13",
    present: statuses[getRandomIntInclusive(0, statuses.length - 1)],
  },
];
