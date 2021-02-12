import './header.scss';

const Header = () => {
  return (
    <header className="">
      <div className="container-lg bg-primary  py-2">
        <div className="row">
          <div className=" col-0 col-sm-8 text-light text-start fs-3"> Simple Chat</div>
          <div className=" col-12 col-sm-4">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-outline-light btn-danger" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;