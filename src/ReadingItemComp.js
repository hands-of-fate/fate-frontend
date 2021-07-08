import React, { Component } from 'react'

export default class ReadingItemComp extends Component {

    render() {
        return (
            <div>
                {
                    this.props.number === 2
                        ? <p> name: {this.props.info.name} </p>
                        : <p> name: {this.props.info.name} Reversed </p>
                }
                <p> type: {this.props.info.type} </p>
                <p> value: {this.props.info.value} </p>
                {
                    this.props.number === 2
                        ? <p> meaning: {this.props.info.meaning} </p>
                        : <p> meaning: {this.props.info.meaningReverse} </p>
                }
            </div>
        )
    }
}