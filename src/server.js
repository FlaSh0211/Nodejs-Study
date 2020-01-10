import express from "express";
import { join } from "path";
import socketIO from "socket.io";
// setting
const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// middleware
app.use(express.static(join(__dirname, "static")));

// routing
app.get("/", (req, res) => res.render("home"));

// server start action
const handlelistening = () => {
  console.log(`server is running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handlelistening);

// io : 발생한 이벤트
const io = socketIO.listen(server);
// eventemiter 로 이벤트를 만들 수 있다
// connection 이라는 이벤트를 생성함
io.on("connection", () => console.log("somebosy connected"));
