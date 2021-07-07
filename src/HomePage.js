import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends 
Component {
    state = {
        combatNumber: 0,
    }

    render() {
        return (
            <div className='homepage-div'>
                Home Page!
                <section>
                    <label id="homepage-img">
                    <Link to='/gallery'>
                            <button id='past'>
                                <div className='button-img'>
                                    Gallery
                                </div>
                        </button>
                    </Link>
                    </label >
                    <label id="homepage-img">
                        <button id='present'> <div className='button-img'>
                                    Present
                                </div></button>
                    </label>
                    <label id="homepage-img">
                        <button id='future'> <div className='button-img'>
                                    Future
                                </div></button>
                    </label>
                </section>
                <Link to='/'>
                    <button onClick={this.props.logout}>logout</button> 
                </Link>
            </div>
        )
    }
}
