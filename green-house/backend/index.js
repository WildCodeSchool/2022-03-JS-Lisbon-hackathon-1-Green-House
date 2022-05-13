const connection = require("./config");
const express = require("express");
const app = express();
const authRouter = require("./auth");
const cors = require("cors");

const port = process.env.PORT ?? 5001;

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
    console.log("Successfully connected to the database");
  }
});

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/auth", authRouter);

// app.get(
//   "/leaderboard",
//   (req, res) => {
//    connection.query("SELECT * FROM users;", (err, results) => {
//      console.log(res)
//      console.log(results)
//     //   if (err) res.status(500).send(err);
//     //   res.status(200).json(results);
//     })
//   }
// )
app.get("/leaderboard", (req, res) => {
  let sql = "SELECT email, userName, score FROM users";

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving users from database");
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
