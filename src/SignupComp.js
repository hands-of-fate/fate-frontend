import React, { Component } from 'react'
import { signup } from './FetchUtils.js'

export default class SignupComp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await signup(this.state.email, this.state.password);
        this.props.login(token)
        this.props.history.push('/home')
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                Sign up!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        password
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Sign up!</button>
                </form>
            </div>
        )
    }
}
