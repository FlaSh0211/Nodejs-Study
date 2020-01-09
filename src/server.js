import express from "express";
import {join } from "path";

// setting
const PORT = 4000;
const app = express();

app.set("views engine", "pug");
app.set("views", join(__dirname, 'views'));

// routing
app.get("/",(req,res)=> res.render("home"))


// server start action
const handlelistening = () =>{
    console.log(`server is running: http://localhost:${PORT}`);
};

app.listen(PORT,handlelistening);