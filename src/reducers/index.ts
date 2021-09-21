import { combineReducers } from "redux";
import { userReducer } from "./user";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { articlesReducer } from './articles';

export const rootReducer = combineReducers({
  auth: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  articles: articlesReducer
});
export type RootState = ReturnType<typeof rootReducer>;
