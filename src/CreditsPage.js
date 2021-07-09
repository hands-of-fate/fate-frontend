import React, { Component } from 'react'
import './CreditsPage.css'

export default class CreditsPage extends Component {
    render() {
        return (
            <div className="credits-overall">
                <section className="section-top"></section>
                <section className="section-mid">
                    <div className="credits-div">
                        <p>Bri</p>
                    </div>
                    <div className="credits-div">
                        <p className='box'>Madden (They/Them/He/Him)</p>
                        <p className="blurb box">Madden feels affection for the Page’s in each tarot suit, as each Page asks you to explore a new facet of yourself. They are a transgender youth advocate and love to sit in a floaty in fresh bodies of water.
                        </p>
                        <a href='https://github.com/maddenlockin' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/madden-lockin/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div>
                    <div className="credits-div">
                        <p>Maria</p>
                    </div>
                    <div className="credits-div">
                        <p className='box'>Missael (He/Him)</p>
                        <p className="blurb box">Missael associates himself with the Fortitude Major Arcana. He enjoys the nerdier things in life, especially videogames and Dungeons and Dragons.
                        </p>
                        <a href='https://github.com/MissaelOrtiz' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/missaelortiz/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div>
                </section>
                <section className="section-bot"></section>
            </div>
        )
    }
}
