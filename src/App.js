import React, { Component } from 'react';
import './App.css';
import Toolbar from './containers/Toolbar'
import MessageList from './containers/MessageList'

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
