import React, { Component } from 'react'
import { getAllCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import RewardItemsComp from './RewardItemsComp'


export default class RewardsPage extends Component {
    state = {
        reward_cards: [],
        all_cards: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllCards();
        var fullDeck = new Deck(all_cards_data);
        this.setState({ 
            all_cards: all_cards_data,
            reward_cards: fullDeck.drawRandom(3)
        });
    }

    componentDidMount = async () => {
        await this.doFetch();
    }

    render() {
        return (
            <div>
                <div className="layout">
                {
                    this.state.reward_cards.map((card, i) => 
                        <RewardItemsComp info={card} key={i} /> 
                    )
                }
                </div>
            </div>
        )
    }
}
