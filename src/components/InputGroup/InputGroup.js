import React from "react";

const InputGroup = ({
	placeholder,
	buttonName,
	buttonType,
	inputType,
	buttonClickHandler,
	handleChange,
	submitHandler,
}) => {
	return (
		<form onSubmit={submitHandler}>
			<div class="input-group">
				<input
					type="text"
					className="form-control"
					onChange={handleChange}
					id={inputType}
					placeholder={placeholder}
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<input type="submit"
					className="btn btn-outline-light btn-danger"
					// onClick={buttonClickHandler}
					id={buttonType} 
				/>
					{/* {buttonName} */}
				
			</div>
		</form>
	);
};

export default InputGroup;
