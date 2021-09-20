import React from 'react';

import { Search, Link } from 'carbon-components-react';
import logo from '../res/authors-logo.jpeg'
import { auth } from '.././firebase';
import { LogoutIcon } from 'components/icons';

import './__styles__/navbar.scss';

interface Props {
  user?: string;
  logout: () => void;
  isLoggedIn?: boolean;
};

export const NavBar: React.FC<Props> = ({ user, logout, isLoggedIn }) => {
  const logoutUser = () => {
    logout();
    auth.signOut();
  };


  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <span>uthors's Heaven</span>
      </div>
      <div><Search id="search-1" placeHolderText="Search" labelText= '' className="custom-search" /></div>
      {isLoggedIn ? 
        <div className="right-section">
          <img src={auth?.currentUser?.photoURL || ""} className="user-avatar" alt="User" />
          <span className="username">{user || auth?.currentUser?.displayName}</span>
          <div className="logout-button" onClick={logoutUser}><LogoutIcon /></div>
        </div>
        :
        <div className="right-section">
          <div className="auth-buttons">
            <Link className="bx--btn bx--btn--secondary login-btn" type="button" href="/login" >Sign In</Link>
            <Link className="bx--btn bx--btn--secondary login-btn" type="button" href="/register" >Register</Link>
          </div>
        </div>
        }
    </div>
  )
};
