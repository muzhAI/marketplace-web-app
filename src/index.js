import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './scenes/router';
import Api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    Api.init();
  }

  render() {
    console.log(Api.Auth.isLoggedIn);
    return <Router />;
  }
}
// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
