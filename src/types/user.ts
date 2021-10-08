export interface UserData {
  username?: string;
  email: string;
  password: string;
};

export interface ApiTokens {
  access: string;
  refresh: string;
}
export interface ApiUser {
  username?: string;
  email: string;
  tokens: ApiTokens;
};

export interface FireBaseUser {
  profile: {};
  credential: {};
}
export interface UserState {
  user?: ApiUser;
  isLoggedIn: boolean;
  firebaseAuth?: FireBaseUser;
};
