import "./message.scss";
import React from "react";

const Message = ({ userName, message }) => {
	return (
		<div
			className="border d-inline-block border-primary m-1 shadow rounded p-1"
			style={{ minWidth: "30%" }}
		>
			<p className="mb-0">{`${userName}: ${message}`}</p>
		</div>
	);
};

export default Message;
