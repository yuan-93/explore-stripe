import "dotenv/config";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import stripeRouter from "./routes/stripe-router";

const port = process.env.PORT;

const app: Express = express();

const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: whiteList,
};

app.use(cors(corsOptions));

app.use("/stripe", stripeRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
