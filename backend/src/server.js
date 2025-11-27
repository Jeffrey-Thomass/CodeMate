import express from 'express';
import { ENV } from './lib/env.js';


const port = process.env.PORT;
const app = express();
app.get("/" , (req,res) => {
    res.json({
        message : "hello world"
    })
})
app.listen(ENV.PORT, () => {
    console.log("listening on port 3000")
})

