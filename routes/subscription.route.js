import { Router } from "express";

const subscription = Router();

subscription.post("/", (req, res) =>
  res.send({ title: "Get all the subscription" })
);

export default subscription;
