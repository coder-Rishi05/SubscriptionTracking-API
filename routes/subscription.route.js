import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getAllSub,
  getSubAndUpdate,
  getUserSubcriptions,
  getUserSubcriptionsById,
} from "../controllers/subcription.contoller.js";

const subscription = Router();

subscription.get("/", authorize, getAllSub);

subscription.get("/:id", authorize, getUserSubcriptionsById);

subscription.post("/", authorize, createSubscription);

subscription.put("/:id",authorize,getSubAndUpdate);

subscription.delete("/:id", (req, res) =>
  res.send({ title: "Delete a subscription" }),
);

// extract subs of specific user.
subscription.get("/user/:id", authorize, getUserSubcriptions);

subscription.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel the subscription" }),
);

subscription.get("/upcoming-renewal", (req, res) =>
  res.send({ title: "Get upcoming renewals" }),
);

export default subscription;
