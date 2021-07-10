import React, { Component } from 'react'
import './ReadingItemComp.css';

export default class ReadingItemComp extends Component {

    render() {
        return (
            <div className="readingCards">
                <div img src='./assests/tarotBack.jpg' alt="background" className="readingBG">
                    </div>
                <div className="outerBox">
                {
                    this.props.number === 2
                    // getting a little div-soupy here, but, hey, that's life! Maybe some newlines and tabs can make it more readable
                        ? <div className="box">
                            <div> {this.props.info.name} </div> 
                        </div>
                        : <div className="box"> 
                            <div> {this.props.info.name} Reversed </div> 
                        </div>
                }
                <div className="box"> 
                    <div> {this.props.info.type} </div> 
                </div>
                {
                    this.props.number === 2
                        ? <div className="box"> 
                            <div className="meanings"> {this.props.info.meaning} </div> 
                        </div>
                        : <div className="box"> 
                            <div className="meanings"> {this.props.info.meaningReverse} </div>
                        </div>
                }
                </div>
            </div>
        )
    }
}