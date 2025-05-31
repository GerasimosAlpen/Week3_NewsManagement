import express from "express";
import cors from "cors";
import newsRoutes from "./src/routes/newsRoute.js";

const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server on boarding");
});

newsRoutes(app)

app.listen(port, () => {
  console.log(`server lagi jalan di http://localhost:${port}`);
});
