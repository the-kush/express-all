const express = require('express');
const { z } = require('zod');
const app = express();
const Port = 3000;

app.use(express.json())

const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
})

const userData = z.object({
    name: z.string(),
    age: z.number(),
    address: z.string(),
})


app.post('/details', (req, res) => {
    const { name, age, address } = req.body;

    try {
        userData.parse({ name, age, address })
        console.log(name);
        console.log(age);
        console.log(address);
        res.send("Stored successfully")
    }catch(error){
        res.status(400).json({
            msg: "Invalid output",
            details: error, error, error
        })
    }
})
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    try {
        loginSchema.parse({username, password});
        // authentication logic

        res.send('Login Successful');
    }catch(error) {
        res.status(400).json({
            error: "Invalid Inputs",
            details: error, error
        })
    }
})

app.listen(Port);