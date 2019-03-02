import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import { clearUser } from './ducks/reducer';



class App extends Component {

    logout=()=>{
      Axios.post('/auth/logout').then(
        response => {
          // this.props.clearUser()
        }
      )
      this.props.history.push('/')
    }
  render() {
    return (
      <div className="App">
        <Nav location={this.props.location}  history={this.props.history} logout={this.logout}/>
        
        {routes}
      </div>
    );
  }
}


export default withRouter(App);
