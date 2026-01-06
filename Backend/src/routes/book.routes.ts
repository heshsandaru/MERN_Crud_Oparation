import { Router } from "express";
import { createbook, deleteBookById, getBookById, getBooks, updateBookById } from "../controller/book.controller";
import { get } from "node:http";

const router = Router();

router.post("/",createbook);
router.get("/",getBooks);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);
router.get("/:id", getBookById);


export default router;