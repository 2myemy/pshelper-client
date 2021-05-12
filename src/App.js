import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home.js';
import ComingSoon from './ComingSoon.js';


class App extends Component {
  render() {
    const Footer = styled.footer`
    display: block;
    text-align: center;
    font-size: 13px;
    `;

    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/comingsoon" component={ComingSoon}/>
        <Footer>© 2021 50625, Inc. All right reserved.</Footer>
      </div>
    );
  }
}

export default App;