const connection = require("./config");
const express = require("express");
const app = express();
const authRouter = require("./auth");

const port = process.env.PORT ?? 3000;

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
    console.log("Successfully connected to the database");
  }
});

app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
