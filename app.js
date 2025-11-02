import express from "express";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcombe to subscription api.");
});

app.listen(port, () => {
  console.log(`server is running at : http://localhost:${port}`);
});

export default app;