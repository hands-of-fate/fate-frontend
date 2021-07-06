import React, { Component } from 'react'
import { login } from './FetchUtils.js'

export default class LoginComp extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login(this.state.email, this.state.password);
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
                log in!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email
                        <input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        password
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </label>
                    <button>Login!</button>
                </form>
            </div>
        )
    }
}
