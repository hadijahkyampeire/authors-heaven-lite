import React, { useState } from 'react';

import { Search } from 'carbon-components-react';
import logo from '../res/authors-logo.jpeg'
import { LoginModal, SignUpModal } from './modals';
import './__styles__/navbar.scss';

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <span>uthors's Heaven</span>
      </div>
      <div><Search id="search-1" placeHolderText="Search" labelText= '' className="custom-search" /></div>
      <div className="right-section">
        <div className="auth-buttons">
          <button className="bx--btn bx--btn--primary login-btn" type="button" onClick={() => setOpenLogin(true)}>Sign In</button>
          <button className="bx--btn bx--btn--tertiary signup-btn" type="button" onClick={() => setOpenSignUp(true)}>Sign Up</button>
        </div>
        <div>Profile</div>
      </div>
      <LoginModal open={openLogin} closeModal={() => setOpenLogin(false)} />
      <SignUpModal open={openSignUp} closeModal={() => setOpenSignUp(false)} />
    </div>
  )
};
