import React from 'react';

const InputGroup = ({ placeholder, buttonName, buttonType, inputType, buttonClickHandler}) => {
  return (
    <div class="input-group">
      <input type="text" className="form-control" id={inputType} placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn btn-outline-light btn-danger"  onClick={buttonClickHandler} type="button"  id={buttonType}>{buttonName}</button>
    </div>
  )
}

export default InputGroup;
