import express from "express";
import { PORT } from "./config/env.js";
import userRoute from "./routes/user.routes.js";
import subscription from "./routes/subscription.route.js";
import authRouter from "./routes/auth.routes.js";

const port = PORT || 3000;
const app = express();

app.use("/api/v1/auth", authRouter); // it means : /api/v1/auth/sign-up
app.use("/api/v1/users", userRoute); // it means : /api/v1/auth/sign-up
app.use("/api/v1/subscription", subscription); // it means : /api/v1/auth/sign-up

app.get("/", (req, res) => {
  res.send("Welcombe to subscription api.");
});

app.listen(port, () => {
  console.log(`server is running at : http://localhost:${port}`);
});

export default app;
