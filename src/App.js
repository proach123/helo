import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav'
import {withRouter} from 'react-router-dom'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav location={this.props.location}  history={this.props.history}/>
        
        {routes}
      </div>
    );
  }
}


export default withRouter(App);
