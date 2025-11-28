import express from 'express';
import { ENV } from './lib/env.js';
import path from 'path';

const __dirname = path.resolve();


const port = process.env.PORT;
const app = express();
app.get("/" , (req,res) => {
    res.json({
        message : "hello world"
    })
})

app.get("/books" , (req,res) => {
    res.status(201).json({
        message : "this is books endpoint"
    })
})

if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"))
    })
}

app.listen(ENV.PORT, () => {
    console.log("listening on port 3000")
})

