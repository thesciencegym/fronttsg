import React from 'react';
import Home from './components/Home';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss'
import './Typography.scss'
import Footer from './components/Footer';
import Order from './components/Order';
import OrderResult from './components/OrderResult';
import CashResult from './components/CashResult'
function App() {
  const history = createBrowserHistory({});

  return (
    <Router history={history}>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/order/:id" component={Order} />
          <Route exact path="/thank-you" component={OrderResult} />
          <Route exact path="/done-order" component={CashResult} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
