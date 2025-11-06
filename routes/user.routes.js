import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.get("/", getUsers);

userRoute.get("/:id", getUser);

userRoute.post("/", (req, res) => {
  res.send({ title: "create user" });
});

userRoute.put("/:id", (req, res) => {
  res.send({ title: "update user" });
});

userRoute.delete("/:id", (req, res) => {
  res.send({ title: "delete user" });
});

export default userRoute;
