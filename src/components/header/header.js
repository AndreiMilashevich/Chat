

function Header() {
  return <div className="w-100 p-3 bg-danger">
    <p>I will be a chat header!</p>
    <label> Your name:
      <input type="text" placeholder="Anonimous"/>
    </label>
  </div>
};

export default Header;