import "dotenv/config";
import cors from "cors";
import models from "./models";
import uuidv4 from "uuid/v4";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.get("/session", (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});
app.get("/", (req, res) => {
  res.send("Received a POST HTTP mehtod");
});
app.get("/users", (req, res) => {
  res.send(Object.values(req.context.models.users));
});
app.get("/users/:userId", (req, res) => {
  res.send(Object.values(req.context.models.users[req.params.userId]));
});
app.get("/messages", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});
app.post("/messages", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id
  };
  req.context.models.messages[id] = message;
  return res.send(message);
});
app.get("/messages/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});
app.delete("/messages/:messageId", (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;
  req.context.models.messages = otherMessages;
  return res.send(message);
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
