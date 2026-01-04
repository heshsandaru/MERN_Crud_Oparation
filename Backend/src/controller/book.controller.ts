import { NextFunction, Request, Response } from "express";
import { BookModel } from "../models/Book";


//create a new book
export const createbook = async(req: Request, res: Response,next: NextFunction) => {
    try{
        const book = new BookModel(req.body);
        await book.save();
        res.status(201).json(book);
    }catch(err: any){
        next(err);
    }
}