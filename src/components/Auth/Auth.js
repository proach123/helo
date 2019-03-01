import React, { Component } from 'react';
import axios from 'axios'


class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        
    }
    handleChange(prop, val){
        console.log(prop, val)
        this.setState({
            [prop]: val
        })
    }

    async register(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        try {

            let res = await axios.post('/auth/register', user);
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard')
        } catch(err) {
            alert('The soul walks not upon a line, neither does it grow like a reed.                    The soul unfolds itself, like a lotus of countless petals. ')
        }
    }

    
    render() {
        return (
            <div>
               <input value={this.username} onChange={e => this.handleChange('username',e.target.value)} />
               <input type='password' value={this.password} onChange={e => this.handleChange('password', e.target.value)} />
               <button onClick={this.register}>Register</button>
               <button onClick={this.login}>Login </button>
            </div>
        )
    }
}

export default Auth