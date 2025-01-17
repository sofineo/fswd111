import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("All Well!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
