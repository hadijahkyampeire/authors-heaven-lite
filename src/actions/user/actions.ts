import UserService from 'services/user';
import { UserData } from "types/user";
import { toast } from 'react-toastify';
import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION, GOOGLE_LOGIN } from './actionTypes';
import { typedAction } from '../utils';


export const logout = () => {
  return function(dispatch: Function) {
     dispatch(typedAction(LOGOUT_ACTION))
     localStorage.clear();
  }
};

export const googleLogin = (user: {} | null) => {
  console.log(user, 'auth')
  return function(dispatch: Function) {
      dispatch(typedAction(GOOGLE_LOGIN, user));
      toast.success('Login Successful');
  };
};

export function registerUser(data: UserData) {
  return function(dispatch: Function) {
    return UserService.signUp(data)
     .then(({ data }) => {
      const { user } = data;
      dispatch(typedAction(REGISTER_ACTION, user));
      toast.success('Registration Successful');
    })
    .catch(e => {
      console.log(e);
      toast.error('Failure during registration')
    });
  };
};

export function loginUser(data: UserData) {
  return function(dispatch: Function) {
    return UserService.login(data)
     .then(({ data }) => {
       const { user } = data;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(typedAction(LOGIN_ACTION, user));
        toast.success('Login Successful')
    })
    .catch(e => {
      console.log(e);
      toast.error('Login failed')
    });
  };
};

