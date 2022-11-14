import express from "express";
import Routes from "./routes/index.js";

const app = express();
app.use(express.json());
Routes.routes(app);

export default app;
