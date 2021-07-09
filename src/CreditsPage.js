import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CreditsPage.css'

export default class CreditsPage extends Component {
    render() {
        return (
            <div className="credits-overall"> 
                <section className="section-top title">
                    <div><Link className="go-home" to='/'>
                        The Hands of Fate
                    </Link>
                        </div>
                </section>
                <section className="section-mid">
                    <div className="credits-div">
                        <div className='box'>
                        <p>Bri Bias (she/her)</p>
                        <p className="blurb">Bri associates heavily with the Sun Major Arcana as it represents the universe coming together. She is an advocate for marginalized communities and an all around love for connecting with people from all walks of life.</p>
                        <a href='https://github.com/bribias'>-Github-</a>
                            <a href="https://www.linkedin.com/in/brianna-bias/">-LinkedIn-</a>
                        </div>
                    </div>
                    <div className="credits-div">
                        <div className='box'>
                        <p>Madden (They/Them/He/Him)</p>
                        <p className="blurb box">Madden feels affection for the Page’s in each tarot suit, as each Page asks you to explore a new facet of yourself. They are a transgender youth advocate and love to sit in a floaty in fresh bodies of water.
                        </p>
                        <a href='https://github.com/maddenlockin' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/madden-lockin/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div></div>
                    <div className="credits-div">
                        <div className='box'>
                            <p>Maria Ortiz-Lopez (she/her)</p>
                            <p className="blurb box">Maria is really fond of The Sun Major Arcana as she likes to bring joy and positivity to those all around her. She loves to get lost in fantasy and to bring that fantasy to life with her drawings and art.</p>
                            <a href="https://github.com/MariaOrtiz1">-Github-</a>
                            <a href="https://www.linkedin.com/in/maria-ortiz-lopez-54392a211/">-LinkedIn-</a>
                        </div>
                    </div>
                    <div className="credits-div">
                        <div className='box'>
                        <p>Missael (He/Him)</p>
                        <p className="blurb box">Missael associates himself with the Fortitude Major Arcana. He enjoys the nerdier things in life, especially videogames and Dungeons and Dragons.
                        </p>
                        <a href='https://github.com/MissaelOrtiz' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                            <a href='https://www.linkedin.com/in/missaelortiz/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                        </div>
                    </div>
                </section>
                <section className="section-bot thanks">
                    We Would Like to Thank:
                    <br/>
                    -Dani2 Duck and 20 Bebes that helped debug
                    <br/>
                    -HanaMina3 for some wonderful assests
                    <br/>
                    -Our wonderfully patient TAs and Instructor
                    <br/>
                    -Those who could not join us today (because they found jobs)
                </section>
            </div>
        )
    }
}
