import './header.scss';

const Header = () => {
  return (
    <div className=" bg-success">
    <div className="input-group bg-success w-25 mt-2 mb-2 ">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-info"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div></div>
  );
}

export default Header;