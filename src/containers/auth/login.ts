import { connect } from 'react-redux';

import { loginUser, logout, googleLogin } from 'actions';
import { LoginPage } from 'components/auth/login';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => {
  console.log(state, 'state')
  return ({
    username: state.auth.user?.username,
    isLoggedIn: state.auth.isLoggedIn
})
};
const mapDispatchToProps = { loginUser, logout, googleLogin };

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);