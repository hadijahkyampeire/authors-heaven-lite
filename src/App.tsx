import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Landing } from 'components/auth';
import { ConnectedNavBar as NavBar } from 'containers';
import { Login, Register } from 'containers/auth';
import { Dashboard } from 'components/dashboard';
import { AppState } from 'types';
import { requireAnonymous, requireAuthenticated } from 'auth';
import './App.scss';
import "react-toastify/dist/ReactToastify.css";

interface Props {
  isLoggedIn?: boolean;
}
const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer autoClose={2000} position="top-right" />
      <Switch>
        <Route exact path="/" component={requireAnonymous(Landing)} />
        <Route path="/register" component={requireAnonymous(Register)} />
        <Route path="/login" component={requireAnonymous(Login)} />
        <Route path="/dashboard" component={requireAuthenticated(Dashboard)} />
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state: AppState) =>  ({
  isLoggedIn: state.auth.isLoggedIn,
});

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
