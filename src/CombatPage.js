import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'

export default class CombatPage extends Component {
    state = {
        current_deck: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllTypedCards('minor');
        var minorTarot = new Deck(all_cards_data);
        this.setState({ current_deck: minorTarot.drawRandom(20)})
    }

    componentDidMount = async () => {
        await this.doFetch();
    }
    render() {
        return (
            <div>
                COMBAAAATTTT
            </div>
        )
    }
}
