import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'

export default class CombatPage extends Component {
    state = {
        current_deck: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        var minorTarot = new Deck(mungedCards);
        this.setState({ current_deck: minorTarot.drawRandom(20)})
    }

    componentDidMount = async () => {
        await this.doFetch();
    }
    render() {
        console.log(this.state.current_deck)
        return (
            <div>
                COMBAAAATTTT
            </div>
        )
    }
}
