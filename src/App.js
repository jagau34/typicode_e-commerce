import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Cart from './components/Cart/Cart';

const App = (props) => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  </Router>
);

export default App;
