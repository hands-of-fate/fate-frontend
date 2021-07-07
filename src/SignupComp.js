import React, { Component } from 'react'
import { signup } from './FetchUtils.js'
import './SignupComp.css'

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
            <>
                <form onSubmit={this.handleSubmit}>
                Sign up!
                <br />
                    <label>
                        Email: &nbsp;
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <br />
                    <label>
                        Password: &nbsp;
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <br />
                    <button>Sign up!</button>
                </form>
            </>
        )
    }
}
