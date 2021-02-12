import './message.scss';

const Message = (props) => {
  return <div className="border border-primary m-1 rounded p-1">
    <p className="mb-0">{props.userName}:</p>
    <p className="mb-0">{props.message}</p>
    </div>
};

export default Message;