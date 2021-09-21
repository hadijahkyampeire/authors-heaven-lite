import { UserState } from "./user";
import { ArticlesState } from './articles';

export interface AppState {
  auth: UserState;
  articles: ArticlesState
};
