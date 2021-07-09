import React, { Component } from 'react'

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
                <button onClick={() => this.props.event(this.props.info)}>Add To Collection!</button>
            </div>
        )
    }
}
