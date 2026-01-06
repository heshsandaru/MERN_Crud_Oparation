import { Router } from "express";
import { createbook, getBooks, updateBookById } from "../controller/book.controller";
import { get } from "node:http";

const router = Router();

router.post("/",createbook);
router.get("/",getBooks);
router.put("/:id", updateBookById);


export default router;