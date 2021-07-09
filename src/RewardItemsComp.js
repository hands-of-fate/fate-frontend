import React, { Component } from 'react'

export default class RewardItemsComp extends Component {
    render() {
        return (
            <button className="rewardCards" onClick={() => this.props.event(this.props.info)}>
                <p>
                    {this.props.info.name}
                </p>
                <p>
                    {this.props.info.type}
                </p>
                <p>
                    {this.props.info.value}
                </p>
            </button>
        )
    }
}
