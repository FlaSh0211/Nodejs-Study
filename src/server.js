import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";

// setting
const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// middleware - 실행순서가 중요 -> 위부터 아래 순서
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

// routing
app.get("/", (req, res) => res.render("home"));

// server start action
const handlelistening = () => {
  console.log(`server is running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handlelistening);

/* io : 소켓 서버를 생성 - http 서버인 express 서버를 연결해서 
두 서버를 동시에 돌리고 io서버는 http서버의 요청도 동시에 감지 할 수 있다*/

// user info
// let sockets = [];

const io = socketIO.listen(server);
// eventemiter 로 이벤트를 보낸다
// connection 이라는 이벤트를 생성함
// 브라우저 console 창에 io("/")를 치면 express서버(http)를 타고  소켓연결을 한다
// 소켓 배열에 접속한 소켓의 정보를 push하여 출력
// io.on("connection", socket => {
//   sockets.push(socket.id);
// });
// 소켓안에 들어있는 정보를 출력 -  필요할 떄 유용
/* io.on("connection", socket => console.log(socket)); */

io.on("connection", socket => {
  // chatting event
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotifi", {
      message,
      nickname: socket.nickname
    });
  });
  socket.on("setNicname", ({ nickname }) => {
    socket.nickname = nickname;
    console.log({ nickname });
  });
});
