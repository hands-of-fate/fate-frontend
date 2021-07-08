import React, { Component } from 'react'
import './RewardItemsComp.css'

export default class RewardItemsComp extends Component {
    render() {
        return (
            <div className="rewardCards">
                <p>
                    {this.props.info.name}
                </p>
                <p>
                    {this.props.info.type}
                </p>
                <p>
                    {this.props.info.value}
                </p>
                <button>Add To Collection!</button>
            </div>
        )
    }
}
