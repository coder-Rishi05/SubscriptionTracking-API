import Subscription from "../model/subcription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });

    res.status(201).json({ sucess: true, data: subscription,workflowRunId  });
  } catch (error) {
    next(error);
  }
};

export const getAllSub = async (req, res, next) => {
  try {
    const subcriptions = await Subscription.find();
    if (!subcriptions) {
      const error = new Error("No subcriptions found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ sucess: true, data: subcriptions });
  } catch (error) {
    next(error);
  }
};

export const getUserSubcriptionsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(404).json({ message: "id not found" });
    const subcription = await Subscription.findById(id);
    res.status(200).json({ sucess: true, data: subcription });
  } catch (error) {
    next(error);
  }
};

export const getUserSubcriptions = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }

    const subcriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ sucess: true, data: subcriptions });
  } catch (e) {
    next(e);
  }
};

export const getSubAndUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;

    // optional: validate id early
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Subscription id is required",
      });
    }

    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id, // ❗ correct way (not { id })
      req.body, // data to update
      {
        new: true, // return updated document
        runValidators: true, // enforce schema validation
      },
    );

    if (!updatedSubscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscription updated successfully",
      data: updatedSubscription,
    });
  } catch (error) {
    next(error);
  }
};
