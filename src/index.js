import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';

let socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  alert('connected')
}

let userName = 'Roma';

const users = [
  {id: 0, name: 'Alex'},
  {id: 1, name: 'Max'},
  {id: 2, name: 'Rex'},
];

const messages = [
  {id: 0, name: 'Alex', message: 'hello'},
  {id: 1, name: 'Max', message: 'hi'},
  {id: 2, name: 'Rex', message: 'Good bye'},
]

const rend = () => {ReactDOM.render(
  <App />,
  document.getElementById('root')
)};

rend();


const messageButton = document.getElementById('messageButton');
const nameButton = document.getElementById('nameButton');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');


messageButton.addEventListener('click', () => {
  messages.push({
    id: messages.length,
    name: userName,
    message: messageInput.value,
  });
  messageInput.value = '';
  rend();
})




reportWebVitals();


export { users, messages };

