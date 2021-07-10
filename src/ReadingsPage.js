import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAllCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import ReadingItemComp from './ReadingItemComp';
import './ReadingsPage.css';

export default class ReadingsPage extends Component {
    state = {
        all_cards: [],
        reading: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllCards();
        const fullDeck = new Deck(all_cards_data);
        this.setState({ 
            all_cards: all_cards_data,
            reading: fullDeck.drawRandom(3)
        });

    }

    componentDidMount = async () => {
        await this.doFetch();
    }

    render() {
        
        return (
            <div className="readingPageContainer">
                <div className="readingTitle">Tarot Reading</div>
                <Link to='/home' >
                    <button>Home</button>
                </Link>
                <div className="layout">
                {
                    this.state.reading.map((card, i) => 
                        <ReadingItemComp number={Math.ceil(Math.random() * 2)} info={card} key={i} /> 
                    )
                }
                </div>
            </div>
        )
    }
}
