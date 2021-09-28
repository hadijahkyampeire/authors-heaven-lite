import React from 'react';

import { ToastContainer } from "react-toastify";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Landing } from 'components/auth';
import { ConnectedNavBar as NavBar } from 'containers';
import { Login, Register } from 'containers/auth';
import { 
  AddArticlePage, 
  ArticlesPage, 
  ArticlePage, 
  PublishedArticlesPage, 
  PublishedArticlePage,
  EditArticlePage 
} from 'containers/articles';
import { requireAnonymous, requireAuthenticated } from 'auth';
import './App.scss';
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer autoClose={2000} position="top-right" />
      <Switch>
        <Route exact path="/" component={requireAnonymous(Landing)} />
        <Route path="/register" component={requireAnonymous(Register)} />
        <Route path="/login" component={requireAnonymous(Login)} />
        <Route path="/articles/published/:slug" component={requireAuthenticated(PublishedArticlePage)} />
        <Route path="/articles/new" component={requireAuthenticated(AddArticlePage)} />
        <Route path="/articles/published" component={requireAuthenticated(PublishedArticlesPage)} />
        <Route path="/articles/:slug/edit" component={requireAuthenticated(EditArticlePage)} />
        <Route path="/articles/:slug" component={requireAuthenticated(ArticlePage)} />
        <Route path="/articles/" component={requireAuthenticated(ArticlesPage)} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
