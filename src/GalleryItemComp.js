import React, { Component } from 'react'

export default class GalleryItemComp extends Component {
    render() {
        console.log('trying to render a card')
        return (
            <div>
                <p> name: {this.props.info.name} </p>
                <p> type: {this.props.info.type} </p>
                <p> value: {this.props.info.value} </p>
            </div>
        )
    }
}
