"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
app.use(express_1.default.static("public"));
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("chatMessage", (msg) => {
        console.log("Message:", msg);
        io.emit("chatMessage", msg); // broadcast to everyone
    });
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
httpServer.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
//# sourceMappingURL=server.js.map