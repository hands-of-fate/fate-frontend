import React, { Component } from 'react'
import { addCard, getAllCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import RewardItemsComp from './RewardItemsComp'
import './RewardItemsComp.css'

export default class RewardsPage extends Component {
    state = {
        reward_cards: [],
        all_cards: [],
        chosen_card: []
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

    addToCollection = async (cardInfo) => {
        await addCard(this.props.token, cardInfo)
        this.props.history.push('/home')
    }

    render() {
        return (
                <div className="layout">
                {
                    this.state.reward_cards.map((card, i) => 
                        <RewardItemsComp event={this.addToCollection} info={card} key={i} />
                    )
                }
                </div>
        )
    }
}
