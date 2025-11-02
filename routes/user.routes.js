import { Router } from "express";

const userRoute = Router();

userRoute.get("/users", (req, res) => {
  res.send({ title: "get all users" });
});


userRoute.get("/:id", (req, res) => {
  res.send({ title: "get specific user" });
});


userRoute.post("/", (req, res) => {
  res.send({ title: "create user" });
});


userRoute.put("/:id", (req, res) => {
  res.send({ title: "update user" });
});


userRoute.delete("/:id", (req, res) => {
  res.send({title: "delete user" });
});


export default userRoute;