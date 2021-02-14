const InputGroup = ({ placeholder, buttonName, buttonType, inputType}) => {
  return (
    <div class="input-group">
      <input type="text" class="form-control" id={inputType} placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button class="btn btn-outline-light btn-danger" type="button" id={buttonType}>{buttonName}</button>
    </div>
  )
}

export default InputGroup;
