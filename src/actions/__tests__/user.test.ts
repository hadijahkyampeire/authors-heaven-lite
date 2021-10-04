import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
  loginUser, 
  registerUser, 
  REGISTER_REQUEST, 
  LOGIN_REQUEST,
  LOGOUT_ACTION,
  logout,
  googleLogin
 } from 'actions';

jest.unmock('services/user');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
  
describe('authenticate action', () => {
  let store: any;
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore({ auth: {} });
  });

  it('fires a login request action', () =>
      store
        .dispatch(loginUser({ email: 'user', password: 'pass' }))
        .then(() => expect(store.getActions()).toContainEqual({ type: LOGIN_REQUEST })));

  it('fires a register request action', () =>
    store
      .dispatch(registerUser({ email: 'user', password: 'pass', username: 'test user' }))
      .then(() => expect(store.getActions()).toContainEqual({ type: REGISTER_REQUEST })));

  it('fires a logout request action', () => {
    store.dispatch(logout());
    expect(store.getActions()).toContainEqual({ type: LOGOUT_ACTION });
  });

  it('fires a google login request action', () => {
    store.dispatch(googleLogin({ email: 'user', password: 'pass', username: 'test user' }));
    expect(store.getActions()).toEqual([{payload: {"email": "user", "password": "pass", "username": "test user"}, type: "google/login"}]);
  });
});

  