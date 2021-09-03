import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from 'components/auth';
import { NavBar } from 'components/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
