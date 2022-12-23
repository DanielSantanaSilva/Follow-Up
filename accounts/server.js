import "dotenv/config.js";
import express from "express";
import "express-async-errors";
import { usersRoutes } from "./src/routes/index.js";
import { errorMiddleware } from "./src/middlewares/error-handler.middleware.js";

const app = express();
app.use(express.json());
app.use(usersRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started listening on port ${process.env.PORT}`);
});
