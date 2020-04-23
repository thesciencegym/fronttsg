import React from 'react';
import Home from './components/Home';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './components/Order';
import OrderResult from './components/OrderResult';
function App() {
  const history = createBrowserHistory({});

  return (
    <Router history={history}>
      <div>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/order/:id" component={Order} />
          <Route exact path="/done/:status" component={OrderResult} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
