import React from "react";
import InputGroup from "../InputGroup/InputGroup";
import "./header.scss";
// import { userName } from '../../index';

class Header extends React.Component {
	state = {
		userName: localStorage.getItem("userName") || "",
		userNameSubmited: JSON.parse(localStorage.getItem('userNameSubmitted')),
	};

	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state.userName);
		this.setState({ userNameSubmited: true });
		localStorage.setItem("userName", `${this.state.userName}`);
		localStorage.setItem("userNameSubmitted", true);
	};

	handleChange = (e) => {
		this.setState({ userName: e.target.value });
	};

	render() {
		return (
			<header>
				<div className="container-lg bg-primary py-2">
					<div className="row">
						<div className="col col-sm-7 text-light text-start fs-3">
							Simple Chat
						</div>
						<div className="col-12 col-sm-5">
							{this.state.userNameSubmited ? (
								<div className="text-light text-center text-uppercase fs-3">
									{this.state.userName}
								</div>
							) : (
								<InputGroup
									submitHandler={this.submitHandler}
									placeholder="User name"
									handleChange={this.handleChange}
									buttonClickHandler={this.buttonClickHandler}
									buttonName="Set name"
									buttonType="nameButton"
									inputType="nameInput"
									className="d-none"
								/>
							)}
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
