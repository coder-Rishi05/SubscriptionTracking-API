import { Router } from "express";

const authRouter = Router();

import { signIn, signUp, signOut } from "../controllers/auth.controller.js";


// Path : /api/auth/sign-up -> post Body --> {name,email,password} --> created a new user

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);

export default authRouter;
 