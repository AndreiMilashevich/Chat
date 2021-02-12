import './main.scss';
import Message from '../Message/Message'
import UserCard from '../UserCard/UserCard';

const Main = () => {
  return (
    <main className="messageBlock">
      <div className="container-lg ">
        <div className="row">
          <div className="col-3 border border-primary messageBlock__height overflow-auto">
            <UserCard userName="Alex"/>
            <UserCard userName="Max"/>
            <UserCard userName="Rex"/>
            <UserCard userName="Andrei"/>
            </div>
        <div className="col-9 border border-primary messageBlock__height overflow-auto">
          <Message message="Hello!" userName="Alex" />
          <Message message="Hello!" userName="Max"/>
          <Message message="Hello!" userName="Rex"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
          <Message message="Hello!" userName="Andrei"/>
        </div>
        </div>
      </div>
    </main>
  )
};

export default Main;