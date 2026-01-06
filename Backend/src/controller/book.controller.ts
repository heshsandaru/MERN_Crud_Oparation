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

//delete a book by Id
export const deleteBookById = async(req: Request, res: Response,next: NextFunction) => {
    try{
        const book = await BookModel.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json({message: "Book deleted successfully"});

    }catch(err: any){
        next(err);
    }
}

//get a book by Id (optional)
export const getBookById = async(req: Request, res: Response,next: NextFunction) => {
    try{
        const book = await BookModel.findById(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json(book);
    }catch(err: any){
        next(err);
    }
}