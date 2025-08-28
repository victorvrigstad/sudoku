import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

app.use(express.static("public"));

io.on("connection", (socket: Socket) => {
  console.log("A user connected:", socket.id);

  socket.on("chatMessage", (msg: string) => {
    console.log("Message:", msg);
    io.emit("chatMessage", msg); // broadcast to everyone
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});