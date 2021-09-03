import React, { useState } from 'react';

import { Search } from 'carbon-components-react';
import logo from '../res/authors-logo.jpeg'
import { LoginModal, SignUpModal } from './modals';
import { auth } from '.././firebase';
import { LogoutIcon } from 'components/icons';

import './__styles__/navbar.scss';

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const logout = () => auth.signOut();

  console.log(auth, 'a')
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
        {auth?.currentUser ?
          (
            <>
            <img src={auth?.currentUser?.photoURL || ""} className="user-avatar" alt="User" />
            <div className="logout-button" onClick={logout}><LogoutIcon /></div>
          </>
          ) : null }
      </div>
      <LoginModal open={openLogin} closeModal={() => setOpenLogin(false)} />
      <SignUpModal open={openSignUp} closeModal={() => setOpenSignUp(false)} />
    </div>
  )
};
