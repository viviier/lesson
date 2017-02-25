import React from 'react';
import {render} from 'react-dom';
import {message} from 'antd'
import {Router, Route, hashHistory} from 'react-router'

class App extends React.Component {
  handleClick(){
    message.success('ok')
  }
  render(){
    return (
      <button
          onClick={this.handleClick}
      >click</button>
    )
  }
}



render(
 <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>,
  document.getElementById('root')
);
