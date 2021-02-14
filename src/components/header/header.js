import InputGroup from '../InputGroup/InputGroup';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container-lg bg-primary py-2">
        <div className="row">
          <div className="col col-sm-8 text-light text-start fs-3"> Simple Chat</div> 
          <div className="col-12 col-sm-4">
            <InputGroup placeholder="User name" buttonName="Set name" buttonType="nameButton" inputType="nameInput" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;