import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App/App";

// TODO move to another file
let userName = "";
let socket = new WebSocket("ws://chat.shas.tel");

socket.onopen = () => {
	console.log("connected");
};

const users = [
	{ id: 0, name: "Alex" },
	{ id: 1, name: "Max" },
	{ id: 2, name: "Rex" },
];

const messages = [
	
];

socket.onmessage = function (event) {
	let res = event.data;
	let mes = JSON.parse(res);
	console.log(mes);
	mes.forEach((element, index) => {
		messages[index] = element;
	});
};


	ReactDOM.render(<App />, document.getElementById("root"));



// const messageButton = document.getElementById("messageButton");
// const nameButton = document.getElementById("nameButton");
// const nameInput = document.getElementById("nameInput");
// const messageInput = document.getElementById("messageInput");

// messageButton.addEventListener("click", () => {
// 	messages.push({
// 		id: messages.length,
// 		name: userName,
// 		message: messageInput.value,
// 	});
// 	messageInput.value = "";
// 	rend();
// });

reportWebVitals();

export { users, messages, userName };
