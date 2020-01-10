// eslint-disable-next-line no-undef
const socket = io("/");

// send message func
function sendMessage (message) {
  socket.emit("newMessage", { message });
}

function handlemessageNotifi(data) {
  const { message, nickname } = data;
  console.log({ message, nickname });
}
socket.on("messageNotifi", handlemessageNotifi);

function setNickname(nickname){
  socket.emit("sendNickname", { nickname });
}
