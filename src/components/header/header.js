import React from 'react';
import InputGroup from '../InputGroup/InputGroup';
import './header.scss';
import { userName } from '../../index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.state = {userName: localStorage.getItem('userName')};
  }

  componentDidMount() {
    console.log(this)
  }

  buttonClickHandler() {
    const input = document.querySelector('#nameInput').value;
    localStorage.setItem('userName', `${input}`);
    this.setState({userName: input});
  }

  render() {
    return (
    <header>
      <div className="container-lg bg-primary py-2">
        <div className="row">
          <div className="col col-sm-7 text-light text-start fs-3"> Simple Chat</div> 
          <div className="col-12 col-sm-5">
            { 
               this.state.userName ? <div className="text-light text-center text-uppercase fs-3">{this.state.userName}</div> : <InputGroup placeholder="User name" buttonClickHandler={this.buttonClickHandler} buttonName="Set name" buttonType="nameButton" inputType="nameInput" className="d-none" />  
            }
          </div>
        </div>
      </div>
    </header>
    );
  } 
}

export default Header;

// if (!userName) 
//               return <InputGroup placeholder="User name" buttonName="Set name" buttonType="nameButton" inputType="nameInput" className="d-none"/>
//              else  return <div>{UserName}</div> 