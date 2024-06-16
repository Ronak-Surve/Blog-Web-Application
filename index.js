const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req,res) =>   {
    res.end("Blog Web Application");
})

app.listen(process.env.PORT,() =>  {console.log(`The server is running on PORT ${process.env.PORT}`)});
