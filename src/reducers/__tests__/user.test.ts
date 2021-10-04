import { REGISTER_ACTION, LOGIN_ACTION, LOGOUT_ACTION, GOOGLE_LOGIN } from 'actions/user';
import { UserState } from "types/user";

import { userReducer } from '../user';

const initialState: UserState = { isLoggedIn: false };

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {type: null})).toEqual(initialState);
  });

  it('handles login request', () => {
    expect(userReducer(initialState, { type: LOGIN_ACTION })).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

  it('handles signup request', () => {
    expect(userReducer(initialState, { type: REGISTER_ACTION, payload: {username: 'test', email: 'test@gmail.com', password: '12345678'} })).toEqual({
      ...initialState,
      user: {username: 'test', email: 'test@gmail.com', password: '12345678'}
    });
  });

  it('handles logout request', () => {
    expect(userReducer(initialState, { type: LOGOUT_ACTION })).toEqual({
      ...initialState,
      isLoggedIn: false,
      user: undefined
    });
  });

  it('handles google login request', () => {
    expect(userReducer(initialState, { type: GOOGLE_LOGIN, payload: {currentUser: { email: 'firebaseUser@gmail.com', token: 'zxy3456'}} })).toEqual({
      ...initialState,
      isLoggedIn: true,
      firebaseAuth: { currentUser: { email: 'firebaseUser@gmail.com', token: 'zxy3456'} }
    });
  });
});
