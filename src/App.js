import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/router/scroll-to-top';
import './styles/index.css';
import Home from './pages/home';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Route exact path='/' component={Home} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
