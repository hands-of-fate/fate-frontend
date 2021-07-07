import React, { Component } from 'react';
import { login } from './FetchUtils.js';

export default class LoginComp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login(this.state.email, this.state.password);
        this.props.login(token)
        console.log(this.props)
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
                <br />
                    <label>
                        email: &nbsp;
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <br />
                    <label>
                        password: &nbsp;
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <br />
                    <button>Login!</button>
                </form>
            </>
        )
    }
}
