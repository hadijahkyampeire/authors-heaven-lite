import { combineReducers } from "redux";
import { userReducer } from "./user";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

export const rootReducer = combineReducers({
  auth: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
export type RootState = ReturnType<typeof rootReducer>;
