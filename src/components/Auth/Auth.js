import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {updateUser} from '../../ducks/reducer'


class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        
    }

    
  destroySession = async () => {
    await axios.post('/auth/logout')
    this.props.clearUser();
    this.props.history.push('/')
} 

    componentDidMount(){
        this.checkUser();
    }


    checkUser = async () => {
        const {id}= this.props;
        if(!id) {
            try {
                let res = await axios.get('api/current')
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
                 } catch (err) {
                 }
        } else {
            this.props.history.push('/')
        }
    }



    
     register = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        
        try {

            let res = await axios.post('/auth/register', user);
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard')
        } catch(err) {
            alert('The soul walks not upon a line, neither does it grow like a reed. The soul unfolds itself, like a lotus of countless petals. ')
            console.log(err)
        }
    }

    login = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/login', user);
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        } catch(err) {
            alert(`username or password incorrect    Your hearts know in silence the secrets of the days and the nights. But your ears thirst for the sound of your heart's knowledge.  You would know in words that which you have always know in thought. You would touch with your fingers the naked body of your dreams.  And it is well you should. '`)
            console.log(err)
        }
    }
    
    handleChange(prop, val){
        console.log(prop, val)
        this.setState({
            [prop]: val
        })
    }
    
    render() {
        const {username, password} = this.state
        return (
            <div>
               <input value={username} onChange={e => this.handleChange('username',e.target.value)} />
               <input type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
               <button onClick={this.register}>Register</button>
               <button onClick={this.login}>Login </button>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id
    }
}

const mapDispatchToProps = {
updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)