import express from "express";
import * as path from "path";
const data = require("../data.json");

export const app = express();

app.use(express.json());

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.get("/data", (req, res) => {
  const { limit, offset } = req.query;

  const start = parseInt(offset);
  const end = start + parseInt(limit);

  res.json(data.slice(start, end));
});

app.get("/data/:id", (req, res) => {
  res.json(data.find((d: any) => d.id === req.params.id));
});

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(distDir, "view.html"));
});
