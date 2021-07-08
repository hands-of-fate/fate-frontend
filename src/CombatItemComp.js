import React, { Component } from 'react'
import { getCardElement, getCardStrength } from './utils/CombatCardUtils'

export default class CombatItemComp extends Component {
    render() {
        let element = getCardElement(this.props.info.suit)
        let beats = getCardStrength(element)
        return (
            <button className="combat-button" onClick={() => this.props.event(this.props.info.value, element, beats)}>
                <p> {this.props.info.name} </p>
                <p> {this.props.info.value} </p>
                <p> {element}</p>
            </button>
        )
    }
}
