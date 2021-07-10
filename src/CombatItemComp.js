import React, { Component } from 'react'
import { getCardElement, getCardStrength } from './utils/CombatCardUtils'
import './CombatItemComp.css';

export default class CombatItemComp extends Component {
    render() {
        let element = getCardElement(this.props.info.suit)
        let beats = getCardStrength(element)
        return (
            // nice use of the callback here with the props.event function!
            <button className="combat-button" onClick={() => this.props.event(this.props.info.value, element, beats)}>
                <p className="card-info"> {this.props.info.name} </p>
                <p className="card-info"> {this.props.info.value} </p>
                <p className="card-info"> {element}</p>
            </button>
        )
    }
}
