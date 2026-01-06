import { Router } from "express";
import bookRouter from "./book.routes";

const rootRoute = Router();

rootRoute.use("/book", bookRouter)


export default rootRoute;