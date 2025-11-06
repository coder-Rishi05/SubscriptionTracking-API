import User from "../model/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ sucess: true, data: users });
  } catch (err) {
    next(err);
  }
}; 

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({ sucess: true, data: user });
  } catch (err) {
    next(err);
  }
};
