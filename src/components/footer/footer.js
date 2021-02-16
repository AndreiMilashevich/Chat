import InputGroup from '../InputGroup/InputGroup';
import React from 'react';

const Footer = () => {
  return (
    <footer >
      <div className="container-lg p-2 bg-primary">
        <InputGroup placeholder="Your message" buttonName="Send message" buttonType="messageButton" inputType="messageInput"/>
      </div>
    </footer>)
};

export default Footer;