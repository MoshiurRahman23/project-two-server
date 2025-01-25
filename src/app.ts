import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFoundRoute";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAController = async (req: Request, res: Response) => {
  // res.send("Hello World!");
  Promise.reject();
};

app.get("/", getAController);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
