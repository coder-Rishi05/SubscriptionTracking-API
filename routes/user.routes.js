import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";
import errorMiddleware from "../middleware/error.middle.js";

const userRoute = Router();

userRoute.get("/", getUsers);

userRoute.get("/:id", authorize, getUser); // using authorize middleware here so that only login user can make this request

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
