import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  console.log(req.context);
  const user = await req.context.models.User.findById(req.context.me._id);
  res.send(user);
});
export default router;
