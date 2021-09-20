import { connect } from 'react-redux';
import { NavBar } from 'components/navbar';
import { AppState } from 'types';
import { logout } from 'actions';

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user?.username,
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = { logout };
export const ConnectedNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
