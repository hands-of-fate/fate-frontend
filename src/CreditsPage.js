import React, { Component } from 'react'
import './CreditsPage.css'

export default class CreditsPage extends Component {
    render() {
        return (
            <div className="credits-overall">
                <section className="section-top">
                    <div>The Hands of Fate</div>
                </section>
                <section className="section-mid">
                    <div className="credits-div">
                        <p className='box'>Bri (She/Her)</p>
                        <p className="blurb box">Brianna associates heavily with the Sun Major Arcana as it represents the universe coming together. She is an advocate for marginalized communities and an all around love for connecting with people from all walks of life.
                        </p>
                        <a href='https://github.com/bribias' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/brianna-bias/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div>
                    <div className="credits-div">
                        <p className='box'>Madden (They/Them/He/Him)</p>
                        <p className="blurb box">Madden feels affection for the Page’s in each tarot suit, as each Page asks you to explore a new facet of yourself. They are a transgender youth advocate and love to sit in a floaty in fresh bodies of water.
                        </p>
                        <a href='https://github.com/maddenlockin' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/madden-lockin/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div>
                    <div className="credits-div">
                        <p className='box'>Maria (She/Her)</p>
                        <p className="blurb box">Maria's blurb.
                        </p>
                        <a href='https://github.com/MariaOrtiz1' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/maria-ortiz-lopez-54392a211/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
                    </div>
                    <div className="credits-div">
                        <p className='box'>Missael (He/Him)</p>
                        <p className="blurb box">Missael associates himself with the Fortitude Major Arcana. He enjoys the nerdier things in life, especially videogames and Dungeons and Dragons.
                        </p>
                        <a href='https://github.com/MissaelOrtiz' target='_blank' rel="noreferrer" className='box'>-Github-</a>
                        <a href='https://www.linkedin.com/in/missaelortiz/' target='_blank' rel="noreferrer" className='box'>-LinkedIn-</a>
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
