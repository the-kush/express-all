const express = require("express");
const app = express();
const port = 3000;

// Simple get request
app.get("/", (req, res) => {
    res.send("Thanks for visiting, this is a simple get request")
})

// Customised request
app.get("/greet/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`)
})

app.listen(port)