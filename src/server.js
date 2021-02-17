const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3000);

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

const users = [];
const connections = [];

io.sockets.on("connection", (socket) => {
	console.log("successful connection");
	connections.push(socket);

	socket.on("disconnect", () => {
		console.log("disconnect");
		connections.splice(connections.indexOf(socket), 1);
	});

	socket.on("send mess", (data) => {
		io.sockets.emit("add mess", {
			mess: data.mess,
			name: data.name,
			className: data.className,
		});
	});
});
