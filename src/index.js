import "dotenv/config";
import cors from "cors";
import models from "./models";
import express from "express";
import routes from "./routes";

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
app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.listen(port, () => console.log("Example app listening on port 3000"));
