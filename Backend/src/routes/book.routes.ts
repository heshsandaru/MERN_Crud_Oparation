import { Router } from "express";
import { createbook } from "../controller/book.controller";

const route = Router();

route.post("/",createbook)