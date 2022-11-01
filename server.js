// index.js
console.log("Yes, you are in!");

const express = require("express");
const app = express();

app.listen(5000, function () {
  console.log("My server is listening on 5000");
});

app.get("/", (req, res) => {
  res.send({
    slackUsername: "SerahN",
    backend: true,
    age: 28,
    bio: "I am a Medical Laboratory Scientist and budding Web Developer; my ultimate goal is to be a renowned bioinformatician. You may call me MedTech Sis!'",
  });
});
