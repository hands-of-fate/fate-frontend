import React, { Component } from 'react'
import LoginComp from './LoginComp.js'
import SignupComp from './SignupComp.js'

export default class TitlePage extends Component {

    render() {
        return (
            <div>
                <section>
                    <p>Title goes here</p>
                </section>
                <section>
                    <SignupComp/>
                    <LoginComp login={this.props.login} history={this.props.history} token={this.props.token} />
                </section>
            </div>
        )
    }
}
