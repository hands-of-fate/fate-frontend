import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginComp from './LoginComp.js'
import SignupComp from './SignupComp.js'
import './TitlePage.css'

export default class TitlePage extends Component {

    render() {
        return (
            <div className="titlePageCont">
                <section className="title">
                    <p>The Hands of Fate</p>
                </section>
                <section className="userForms">
                    <SignupComp login={this.props.login} history={this.props.history} />
                    <LoginComp login={this.props.login} history={this.props.history} />
                </section>
                <Link to='/credits'><p>About Us</p></Link>
            </div>
        )
    }
}
