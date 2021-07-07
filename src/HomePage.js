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
                    <label >Past
                    <Link to='/gallery'>
                        <button id='past'>Gallery</button>
                    </Link>
                    </label>
                    <label >Present
                    <Link to='/combat'>
                        <button id='present'>Challenge Fate</button>
                    </Link>
                    </label>
                    <label >Future
                    <Link to='/readings'>
                        <button id='future'>Readings</button>
                    </Link>
                    </label>
                </section>
                <Link to='/'>
                    <button onClick={this.props.logout}>logout</button> 
                </Link>

            </div>
        )
    }
}
