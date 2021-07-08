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
                What Fate Do You Choose...
                <section>
                    <label id="homepage-img">
                    <Link to='/gallery'>
                            <button id='past'>
                                <div className='button-img'>
                                    Gallery
                                </div>
                        </button>
                    </Link>
                    </label>
                    <label id="homepage-img">
                    <Link to='/combat'>
                            <button id='present'>
                                <div className='button-img'>
                                    Challenge Fate
                                </div></button>
                    </Link>
                    </label>
                    <label id="homepage-img">
                    <Link to='/readings'>
                            <button id='future'>
                                <div className='button-img'>
                                    Future
                                </div></button>
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
