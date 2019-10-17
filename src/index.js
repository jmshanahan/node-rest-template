import "dotenv/config";
import cors from "cors";
import express from "express";

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch"
  },
  2: {
    id: "2",
    username: "Dave Davids"
  }
};
let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1"
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2"
  }
};

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

console.log("Hello node project");
console.log(process.env.MY_SECRET);

app.get("/", (req, res) => {
  res.send("Received a POST HTTP mehtod");
});
app.get("/users", (req, res) => {
  res.send(Object.values(users));
});
app.get("/users/:userId", (req, res) => {
  res.send(Object.values(users[req.params.userId]));
});
app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return req.send(messages[req.params.messageId]);
});

app.post("/", (req, res) => {
  res.send("Received a POST HTTP mehtod");
});
app.put("/", (req, res) => {
  res.send("Received a put HTTP mehtod");
});

app.delete("/", (req, res) => {
  res.send("Received a delete HTTP mehtod");
});

app.listen(port, () => console.log("Example app listening on port 3000"));
