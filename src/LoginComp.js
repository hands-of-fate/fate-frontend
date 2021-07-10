import React, { Component } from 'react';
import { login } from './utils/FetchUtils.js';

// it's kind of non standard to have a component with the word "component" in the title. It should be apparent through context when something is a component
export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login(this.state.email, this.state.password);
        await this.props.login(token)
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
                log in!
                    <label>
                        <input type="email" onChange={this.handleEmailChange} placeholder='EMAIL' />
                    </label>
                    <label>
                        <input type="password" onChange={this.handlePasswordChange} placeholder='PASSWORD' />
                    </label>
                    <button>Login!</button>
                </form>
            </>
        )
    }
}
