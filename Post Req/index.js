require('dotenv').config();
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

const testContent = []

app.post("/add-content", (req, res) => {
    const content = req.body.content

    if(!content){
        res.status(403).json({
            msg: "Content is required"
        })
    }

    testContent.push(content);
    res.status(200).json({
        msg: "Content added successfully"
    })
})

app.listen(port)