import express from "express";
import { PORT } from "./config/env.js";
import userRoute from "./routes/user.routes.js";
import subscription from "./routes/subscription.route.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongoose.js";
import errorMiddleware from "./middleware/error.middle.js";
import cookieParser from "cookie-parser";
import arcMiddleware from "./middleware/arcjet.middleware.js";

const port = PORT || 3000;
const app = express();

app.use(express.json()); // for hadnling json data
app.use(express.urlencoded({ extended: false })); // for form data
app.use(cookieParser()); // for sereading cookie
app.use(arcMiddleware)


app.use("/api/v1/auth", authRouter); // it means : /api/v1/auth/sign-up
app.use("/api/v1/users", userRoute); // it means : /api/v1/auth/sign-up
app.use("/api/v1/subscription", subscription); // it means : /api/v1/auth/sign-up

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcombe to subscription api.");
});

app.listen(port, async () => {
  console.log(`server is running at : http://localhost:${port}`);
  await connectToDatabase();
});

export default app;
