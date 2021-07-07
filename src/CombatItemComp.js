import React, { Component } from 'react'
import { getCardElement } from './utils/CombatCardUtils'

export default class CombatItemComp extends Component {
    render() {
        return (
            <button className="combat-button">
                <p> {this.props.info.name} </p>
                <p> {this.props.info.value} </p>
                <p> {getCardElement(this.props.info.suit)}</p>
            </button>
        )
    }
}
