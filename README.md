# School Management System

## Overview

This is a school management system that allows you to manage students, teachers, and classes. It is a simple system that allows you to add, edit, and delete students, teachers, and classes. It also allows you to assign students to classes and assign teachers to classes.

It provides an alternative to the traditional paper-based systems or spreadsheets that is used in many schools. It is a simple system that is easy to use and is designed to be used by teachers and administrators.

It doesn't try to do too much by being a full-blown LMS, but just focuses on the core functionality of managing students, teachers, and classes, specifically attendance as this is a common metric for various financial aids and funding.

This concept is inspired by the very nice spreadsheet set up by Elias here at Claim Academy and takes it a step further by adding a simple web interface to it.

## Primary Features (MVP)

- [ ] As a teacher, I want to be able to add a student to a class so that I can track their attendance.
- [ ] As a teacher, when I login, I want to see a list of my classes so that I can select one to view.
- [ ] As a teacher, when I select a class, I want to enter the data for capturing attendance (`["Present", "Late", "Left Early", "Excused Absence", "Unexcused Absence"]`).
- [ ] As a teacher, when I select a class, I want to see a list of students in that class.
- [ ] As a teacher, when I select a student, I want to edit their name as well as see all of their grade information, including overall averages.
- [ ] As a teacher, I want to be able to update my account information, such as my name and email.
- [ ] As a teacher, I want to be able to edit my class information, such as the name and description.

---

- [ ] As an administrator, I want to be able to add a teacher to a class.
- [ ] As an administrator, I want to be able to add a student to a class.
- [ ] As an administrator, I want to be able to add a class.
- [ ] As an administrator, I want to be able to edit a student.
- [ ] As an administrator, I want to be able to delete a student.
- [ ] As an administrator, I want to be able to delete a teacher.
- [ ] As an administrator, I want to be able to delete a class.

---

- [ ] As an administrator, I can see all teachers, classes and students.
- [ ] As a teacher, I can only see my classes and students.

## Secondary Features (Stretch)

- [ ] As an administrator, I want to be able to set a maximum threshold of absences for a class.
- [ ] As an administrator, I want to generate a list of students that have exceeded the maximum threshold of absences.
- [ ] As an administrator, I want to assign TAs to classes.

## Bonus Features (Super Stretch)

- [ ] As a teacher, I want to add assignments and track grades through this same system.
- [ ] When a student comes close to the maximum threshold, I want SMS/E-mail notifications to be sent to all involved.
- [ ] As a teacher, I want integrated video conferencing so that I can conduct virtual classes.
- [ ] As a teacher, I want to be able to send SMS/E-mail notifications to students and parents.
- [ ] As a teacher, I want to integrate Slack and/or a chatbot so that I can communicate with students and parents.
- [ ] As an administrator, I want students to be able to update documentation such as immunization records, emergency contacts, etc.
- [ ] As an administrator, I want to add additional roles such as principal, counselor, etc.
- [ ] As an administrator, I want to assign times and classrooms to classes so that I can generate a schedule.
- [ ] As an administrator, I want to generate a scheduling calendar for all classes and teachers.
- [ ] As a teacher, I want to integrate with various learning management systems (LMS) such as Canvas.

## Data Sample and Schema

The [seed data file is included here](./classes.json).
We also have [students](./students.json) and [teachers](./teachers.json) data.
Note that students and teachers are duplicated in the classes data.

**Note:** Each teacher is only assigned to one class. This is a simplification of the data model. In reality, a teacher can be assigned to multiple classes.

I am favoring an [embedded document approach](https://www.mongodb.com/basics/embedded-mongodb) for this project. It also makes it easier to query the data. This is the **general** approach that is used in MongoDB for small data sets.

We have three collections: `classes`, `teachers`, and `students`. Teachers are duplicated in the classes. As this is not SQL, duplicated data in MongoDB is still favored over using `$lookup` and **joins.**

### Sample Data

#### Class Collection

```json
{
  "name": "Full-stack Web Development",
  "description": "Learn to build full-stack web applications with React, Node, Express, and MongoDB.",
  "teacher": {
    "_id": "5f1b9b9e1c9d440000a5b1b1",
    "firstName": "Elias",
    "lastName": "Johnson",
    "email": "elias.johnson@example.com",
    "password": "password1",
    "username": "elias.johnson"
  },
  "students": [
    {
      "_id": "96cbffbf-4e94-40b2-b72e-31d1eb0644f4",
      "firstName": "Alba",
      "lastName": "Mante",
      "present": [
        {
          "date": "2022-01-09",
          "present": "Excused Absence"
        },
        {
          "date": "2022-01-10",
          "present": "Left Early"
        },
        {
          "date": "2022-01-11",
          "present": "Late"
        },
        {
          "date": "2022-01-12",
          "present": "Present"
        },
        {
          "date": "2022-01-13",
          "present": "Unexcused Absence"
        }
      ],
      "grades": [
        {
          "name": "Homework 1",
          "date": "2020-01-09",
          "earned": 8,
          "possible": 10
        },
        {
          "name": "Homework 2",
          "date": "2020-01-10",
          "earned": 5,
          "possible": 10
        },
        {
          "name": "Homework 3",
          "date": "2020-01-11",
          "earned": 8,
          "possible": 10
        },
        {
          "name": "Quiz 1",
          "date": "2020-01-12",
          "earned": 20,
          "possible": 20
        },
        {
          "name": "Exam 1",
          "date": "2020-01-13",
          "earned": 28,
          "possible": 50
        }
      ]
    },
    {
      "_id": "4c8d99da-bd20-4cf3-bcfd-76833cbdeccb",
      "firstName": "Jefferey",
      "lastName": "Kulas",
      "present": [
        {
          "date": "2022-01-09",
          "present": "Excused Absence"
        },
        {
          "date": "2022-01-10",
          "present": "Left Early"
        },
        {
          "date": "2022-01-11",
          "present": "Late"
        },
        {
          "date": "2022-01-12",
          "present": "Present"
        },
        {
          "date": "2022-01-13",
          "present": "Unexcused Absence"
        }
      ],
      "grades": [
        {
          "name": "Homework 1",
          "date": "2020-01-09",
          "earned": 9,
          "possible": 10
        },
        {
          "name": "Homework 2",
          "date": "2020-01-10",
          "earned": 5,
          "possible": 10
        },
        {
          "name": "Homework 3",
          "date": "2020-01-11",
          "earned": 10,
          "possible": 10
        },
        {
          "name": "Quiz 1",
          "date": "2020-01-12",
          "earned": 12,
          "possible": 20
        },
        {
          "name": "Exam 1",
          "date": "2020-01-13",
          "earned": 41,
          "possible": 50
        }
      ]
    },
    {
      "_id": "c11bb91a-3a38-4690-b6be-8d565e13865d",
      "firstName": "Thelma",
      "lastName": "Raynor",
      "present": [
        {
          "date": "2022-01-09",
          "present": "Excused Absence"
        },
        {
          "date": "2022-01-10",
          "present": "Left Early"
        },
        {
          "date": "2022-01-11",
          "present": "Late"
        },
        {
          "date": "2022-01-12",
          "present": "Present"
        },
        {
          "date": "2022-01-13",
          "present": "Unexcused Absence"
        }
      ],
      "grades": [
        {
          "name": "Homework 1",
          "date": "2020-01-09",
          "earned": 7,
          "possible": 10
        },
        {
          "name": "Homework 2",
          "date": "2020-01-10",
          "earned": 8,
          "possible": 10
        },
        {
          "name": "Homework 3",
          "date": "2020-01-11",
          "earned": 10,
          "possible": 10
        },
        {
          "name": "Quiz 1",
          "date": "2020-01-12",
          "earned": 17,
          "possible": 20
        },
        {
          "name": "Exam 1",
          "date": "2020-01-13",
          "earned": 29,
          "possible": 50
        }
      ]
    },
    {
      "_id": "67e65487-0ec8-4bdd-8aa5-06925ee8273e",
      "firstName": "Cecile",
      "lastName": "Hudson",
      "present": [
        {
          "date": "2022-01-09",
          "present": "Excused Absence"
        },
        {
          "date": "2022-01-10",
          "present": "Left Early"
        },
        {
          "date": "2022-01-11",
          "present": "Late"
        },
        {
          "date": "2022-01-12",
          "present": "Present"
        },
        {
          "date": "2022-01-13",
          "present": "Unexcused Absence"
        }
      ],
      "grades": [
        {
          "name": "Homework 1",
          "date": "2020-01-09",
          "earned": 10,
          "possible": 10
        },
        {
          "name": "Homework 2",
          "date": "2020-01-10",
          "earned": 10,
          "possible": 10
        },
        {
          "name": "Homework 3",
          "date": "2020-01-11",
          "earned": 6,
          "possible": 10
        },
        {
          "name": "Quiz 1",
          "date": "2020-01-12",
          "earned": 18,
          "possible": 20
        },
        {
          "name": "Exam 1",
          "date": "2020-01-13",
          "earned": 43,
          "possible": 50
        }
      ]
    },
    {
      "_id": "d227599c-d56e-418e-a419-09bedd753f8c",
      "firstName": "Era",
      "lastName": "Beier",
      "present": [
        {
          "date": "2022-01-09",
          "present": "Excused Absence"
        },
        {
          "date": "2022-01-10",
          "present": "Left Early"
        },
        {
          "date": "2022-01-11",
          "present": "Late"
        },
        {
          "date": "2022-01-12",
          "present": "Present"
        },
        {
          "date": "2022-01-13",
          "present": "Unexcused Absence"
        }
      ],
      "grades": [
        {
          "name": "Homework 1",
          "date": "2020-01-09",
          "earned": 7,
          "possible": 10
        },
        {
          "name": "Homework 2",
          "date": "2020-01-10",
          "earned": 6,
          "possible": 10
        },
        {
          "name": "Homework 3",
          "date": "2020-01-11",
          "earned": 10,
          "possible": 10
        },
        {
          "name": "Quiz 1",
          "date": "2020-01-12",
          "earned": 18,
          "possible": 20
        },
        {
          "name": "Exam 1",
          "date": "2020-01-13",
          "earned": 49,
          "possible": 50
        }
      ]
    }
  ]
}
```

#### Teachers Collection

```json
{
  "_id": "5f1b9b9e1c9d440000a5b1b1",
  "firstName": "Elias",
  "lastName": "Johnson",
  "email": "elias.johnson@example.com",
  "password": "password1",
  "username": "elias.johnson"
}
```

### Students Collection

```json
{
  "_id": "5c900785-ac72-4188-ab01-9889a574e8e9",
  "firstName": "Jimmie",
  "lastName": "White",
  "present": [
    {
      "date": "2022-01-09",
      "present": "Excused Absence"
    },
    {
      "date": "2022-01-10",
      "present": "Left Early"
    },
    {
      "date": "2022-01-11",
      "present": "Late"
    },
    {
      "date": "2022-01-12",
      "present": "Present"
    },
    {
      "date": "2022-01-13",
      "present": "Unexcused Absence"
    }
  ],
  "grades": [
    {
      "name": "Homework 1",
      "date": "2020-01-09",
      "earned": 10,
      "possible": 10
    },
    {
      "name": "Homework 2",
      "date": "2020-01-10",
      "earned": 9,
      "possible": 10
    },
    {
      "name": "Homework 3",
      "date": "2020-01-11",
      "earned": 7,
      "possible": 10
    },
    {
      "name": "Quiz 1",
      "date": "2020-01-12",
      "earned": 13,
      "possible": 20
    },
    {
      "name": "Exam 1",
      "date": "2020-01-13",
      "earned": 20,
      "possible": 50
    }
  ]
}
```

### Mongoose Schema

```js
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

const gradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  earned: { type: Number, required: true },
  possible: { type: Number, required: true },
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  attendance: [AttendanceSchema],
  grades: [GradeSchema],
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teacher: TeacherSchema,
  students: [StudentSchema],
});
```

## MVP API Endpoints

### 🧑‍🏫

- [ ] `POST /api/teacher/login` - Login a teacher
- [ ] `POST /api/teacher/logout` - Logout a teacher
- [ ] `POST /api/teacher/register` - Register a teacher (admin only)
- [ ] `GET /api/teacher` - Get all teachers (admin only)
- [ ] `PUT /api/teacher/:teacherId` - Update a teacher (teacher updates their own, admin updates any)
- [ ] `DELETE /api/teacher/:teacherId` - Delete a teacher (admin only)

### Classes 🧑‍🎓

- [ ] `GET /api/classes` - Get all classes. Admin gets all. Teacher gets only their classes.
- [ ] `POST /api/classes` - Create a class (admin only)
- [ ] `PUT /api/classes/:classId` - Update a class (admin only). We can add students, teachers, update the name and description. We can also update attendance.
- [ ] `DELETE /api/classes/:classId` - Delete a class (admin only)

### Students 🧑‍🎓

- [ ] `GET /api/students` - Get all students. Admin gets all. Teacher gets only their students (across all classes). When an admin clicks on a student, they can see all of their classes and average grades.
- [ ] `GET /api/students/student` - Get a student. Admin gets any. Teacher gets their own students.
- [ ] `POST /api/students` - Create a student (admin only).
- [ ] `PUT /api/students/:studentId` - Update a student. Admin updates any. Teacher updates their own students.
- [ ] `DELETE /api/students/:studentId` - Delete a student (admin only)
