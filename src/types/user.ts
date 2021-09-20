export interface UserData {
  username?: string;
  email: string;
  password: string;
};

export interface ApiUser {
  username?: string;
  email: string;
  token: string;
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
