import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors";
import { connectDB } from "./db/mongo";

dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api",)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})