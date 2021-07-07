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
            <div>
                Home Page!
                <section>
                    <label >
                    <Link to='/gallery'>
                            <button id='past'>
                                <img src='https://i.pinimg.com/originals/a1/37/14/a13714f74025104a6ef61c5906dbf834.jpg' alt='Past Cards'></img>
                        </button>
                    </Link>
                    </label>
                    <label >
                        <button id='present'><img src='https://i.pinimg.com/originals/a1/37/14/a13714f74025104a6ef61c5906dbf834.jpg' alt='Present Cards'></img></button>
                    </label>
                    <label >
                        <button id='future'><img src='https://i.pinimg.com/originals/a1/37/14/a13714f74025104a6ef61c5906dbf834.jpg' alt='Future Cards'></img></button>
                    </label>
                </section>
                <Link to='/'>
                    <button onClick={this.props.logout}>logout</button> 
                </Link>
            </div>
        )
    }
}
