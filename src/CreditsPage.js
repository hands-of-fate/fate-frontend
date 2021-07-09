import React, { Component } from 'react'
import './CreditsPage.css'

export default class CreditsPage extends Component {
    render() {
        return (
            <div className="credits-overall">
                <section className="section-top"></section>
                <section className="section-mid">
                    <div className="credits-div">
                        <p>Bri</p>
                    </div>
                    <div className="credits-div">
                        <p>Madden</p>
                    </div>
                    <div className="credits-div">
                        <p>Maria</p>
                    </div>
                    <div className="credits-div">
                        <p>Missael</p>
                    </div>
                </section>
                <section className="section-bot"></section>
            </div>
        )
    }
}
