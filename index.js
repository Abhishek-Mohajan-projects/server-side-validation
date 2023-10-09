const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const userRouter = require("./routes/User");
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).send("testing routes");
});

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
