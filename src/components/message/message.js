import './message.scss';

const Message = ({ userName, message }) => {
  return (<div className="border d-inline-block border-primary m-1 rounded p-1">
    <p className="mb-0">{`${userName}: ${message}`}</p>
    
    </div>
    )
};

export default Message;