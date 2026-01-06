import { Router } from "express";
import { createbook, getBooks } from "../controller/book.controller";
import { get } from "node:http";

const router = Router();

router.post("/",createbook);
router.get("/",getBooks);


export default router;