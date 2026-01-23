import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription } from "../controllers/subcription.contoller.js";


const subscription = Router();

subscription.get("/", (req, res) =>
  res.send({ title: "Get all the subscription" })
);

subscription.get("/:id", (req, res) =>
  res.send({ title: "Get  subscription by details " })
);

subscription.post("/",authorize, createSubscription
);

subscription.put("/:id", (req, res) =>
  res.send({ title: "update a subscription" })
);

subscription.delete("/:id", (req, res) =>
  res.send({ title: "Delete a subscription" })
);

// extract subs of specific user.
subscription.get("/user/:id", (req, res) =>
  res.send({ title: "Get all  the user specific subscription" })
);

subscription.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel the subscription" })
);

subscription.get("/upcoming-renewal", (req, res) =>
  res.send({ title: "Get upcoming renewals" })
);

export default subscription;
