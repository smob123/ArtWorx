import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/router/scroll-to-top';
import './styles/index.css';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Pricing from './pages/pricing';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
          <Route path={process.env.PUBLIC_URL + '/pricing'} component={Pricing} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
