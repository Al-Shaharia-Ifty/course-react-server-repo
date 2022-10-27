const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

//
const allCourses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});
//
app.get("/courses", (req, res) => {
  res.send(allCourses);
});
// single Course Details
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const courseDetails = allCourses.find((q) => q.id === id);
  console.log(id);
  res.send(courseDetails);
});

app.listen(Port, () => {
  console.log("server is running on", Port);
});

// module.exports = app;
