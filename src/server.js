import express from "express";
import {join} from "path";
import socketIO from "socket.io";
// setting
const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, 'views'));

// middle ware 
app.use(express.static(join(__dirname, "static")));

// routing
app.get("/",(req,res)=> res.render("home"));


// server start action
const handlelistening = () =>{
    console.log(`server is running: http://localhost:${PORT}`);
};

app.listen(PORT,handlelistening);