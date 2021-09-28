import { store } from './store';
import { isEmpty } from 'lodash';
import { LOGOUT_ACTION } from 'actions/user';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import { AppState } from "types";

export const addAuthToken = (data: any, headers?: any) => {
  const userObj = localStorage.getItem('user') || '';
  const user = JSON.parse(userObj);
  const { tokens } = user;
  const { access } = tokens;

  headers["Authorization"] = `Bearer ${access}`;
  return data;
};

export function action(type: string) {
  return { type };
}

export const isAuthenticated = (state: AppState) => state.auth.isLoggedIn;

export const getLoggedUser = (state: AppState) => state.auth.user?.email;

export const redirectIfNotLoggedIn = (response: any) => {
  console.log(response, 'RESSS', isEmpty(response.errors))
  if (!isEmpty(response.errors)) {
    store.dispatch(action(LOGOUT_ACTION));
    localStorage.clear();
  }
  return response;
};

const { getRedirectQueryParam } = locationHelperBuilder({});

const authenticatedOptions = {
  authenticatedSelector: isAuthenticated,
  wrapperDisplayName: 'RequireAuthenticated'
};

export const ifAuthenticated = connectedAuthWrapper(authenticatedOptions);

export const requireAuthenticated = connectedRouterRedirect({
  ...authenticatedOptions,
  redirectPath: '/login'
});

const anonymousOptions = {
  authenticatedSelector: (state: AppState) => !isAuthenticated(state),
  wrapperDisplayName: 'RequireAnonymous'
};

export const ifAnonymous = connectedAuthWrapper(anonymousOptions);

export const requireAnonymous = connectedRouterRedirect({
  ...anonymousOptions,
  redirectPath: (state: AppState, ownProps: string) => {
    return getRedirectQueryParam(ownProps) || '/articles/';
  },
  allowRedirectBack: false
});

