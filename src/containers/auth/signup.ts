import { connect } from 'react-redux';

import { registerUser } from 'actions';
import { SignUpPage } from 'components/auth';
import { AppState } from 'types';


const mapStateToProps = (state: AppState) => ({
  username: state.auth.user?.username,
});
const mapDispatchToProps = { registerUser };

export const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
