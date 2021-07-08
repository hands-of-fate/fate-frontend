import React, { Component } from 'react'
import { getCardElement } from './utils/CombatCardUtils'

export default class CombatItemComp extends Component {
    render() {
        let element = getCardElement(this.props.info.suit)
        return (
            <button className="combat-button" onClick={() => this.props.event(this.props.info.value, element)}>
                <p> {this.props.info.name} </p>
                <p> {this.props.info.value} </p>
                <p> {element}</p>
            </button>
        )
    }
}
