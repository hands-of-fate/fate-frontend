import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAllCards } from './utils/FetchUtils'
import GalleryItemComp from './GalleryItemComp';
import Deck from 'card-deck'

export default class ReadingsPage extends Component {
    state = {
        all_cards: [],
        reading: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllCards();
        var fullDeck = new Deck(all_cards_data);
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
            <div>
                GETCHA TAROT READ
                <Link to='/home' >
                    <button>Home</button>
                </Link>
                {
                    this.state.reading.map((card, i) =>
                        <GalleryItemComp info={card} key={i} />
                    )
                }
            </div>
        )
    }
}
