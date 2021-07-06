import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends 
Component {
    state = {
        combatNumber: 0,
    }

    render() {
        return (
            <div>
                Home Page!
                <section>
                    <p for='past'>Past</p>
                    <Link>
                        <button id='past'>Gallery</button>
                    </Link>
                    <p for='present'>Present</p>
                    <button id='present'>Combat</button>
                    <p for='future'>Future</p>
                    <button id='future'>Reading</button>
                </section>
                <Link to='/'>
                    <button onClick={this.props.logout}>logout</button> 
                </Link>

            </div>
        )
    }
}
