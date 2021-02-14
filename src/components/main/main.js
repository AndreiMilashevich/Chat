import './main.scss';
import Message from '../Message/Message'
import UserCard from '../UserCard/UserCard';
import { users, messages } from '../../index';
import React from 'react';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: users, messages: messages};
  }
  
  render() {
    return (
    <main className="messageBlock">
      <div className="container-lg ">
        <div className="row">
          <div className="col-3 border border-primary messageBlock__height overflow-auto">
            {
            this.state.users.map((item) => {
              return <UserCard userName={item.name} key={item.id}/>
            })
            }
            </div>
        <div className="col-9 border border-primary d-flex flex-column align-items-end messageBlock__height overflow-auto">
          {
          this.state.messages.map((item) => {
            return <Message userName={item.name} message={item.message} key={item.id}/>
          })
          }
        </div>
        </div>
      </div>
    </main>
  )}
} 


export default Main;