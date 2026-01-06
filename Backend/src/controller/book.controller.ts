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

//Get all books
export const getBooks = async(req: Request, res: Response,next: NextFunction) => {
    try{
        const books = await BookModel.find();
        res.status(200).json(books);
    }catch(err: any){
        next(err);
    }
}

//update a book by Id
export const updateBookById = async(req: Request, res: Response,next: NextFunction) => {
    try{
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json(book);
    }catch(err: any){
        next(err);
    }
}