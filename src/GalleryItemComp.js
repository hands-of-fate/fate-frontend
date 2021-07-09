import React, { Component } from 'react'
import './GalleryItemComp.css';

export default class GalleryItemComp extends Component {
    render() {
        //console.log(this.props.info)
        return (
            <div className="galleryCards">
                <p> name: {this.props.info.name} </p>
                <p> type: {this.props.info.type} </p>
                <p> value: {this.props.info.value} </p>
            </div>
        )
    }
}
