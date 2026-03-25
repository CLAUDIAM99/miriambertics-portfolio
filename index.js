const express = require("express");
const cors = require("cors");

const app = express();
const port = Number(process.env.PORT) || 3000;

const frontendUrl = (process.env.FRONTEND_URL || "").trim();
app.use(
  cors({
    origin: frontendUrl.length > 0 ? frontendUrl : true,
    credentials: false,
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "miriambertics-api" });
});

app.get("/api/info", (_req, res) => {
  res.json({
    name: "Miriam Bertin — Portfolio",
    description: "Graphic Designer & Art Director",
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`miriambertics-api listening on ${port}`);
});
