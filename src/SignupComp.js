import React, { Component } from 'react'
import { newUserStarterCard, signup } from './utils/FetchUtils.js'
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
        newUserStarterCard(token)
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
                    <label>
                        <input type="email" onChange={this.handleEmailChange} placeholder='EMAIL' />
                    </label>
                    <label>
                        <input type="password" onChange={this.handlePasswordChange} placeholder='PASSWORD' />
                    </label>
                    <button>Sign up!</button>
                </form>
            </>
        )
    }
}
