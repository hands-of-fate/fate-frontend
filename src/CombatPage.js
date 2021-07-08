import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import CombatItemComp from './CombatItemComp'
import './CombatPage.css'
import { getCardElement, getCardStrength } from './utils/CombatCardUtils'

export default class CombatPage extends Component {
    state = {
        current_deck: [],
        current_hand: [],
        user_health: 50,
        user_affliction: 'Pure',
        enemy_health: 50,
        enemy_affliction: 'Pure',
        enemy_card: []
    }

    doFetch = async () => {
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        var minorTarot = new Deck(mungedCards);
        this.setState({ current_deck: minorTarot.drawRandom(15)});
        var currentDeck = new Deck(this.state.current_deck);
        this.setState({ current_hand: currentDeck.drawRandom(3)});
    }

    componentDidMount = async () => {
        await this.doFetch();
    }

    handleCardSelect = (val, elem, beats) => {
// This section will check to see if the enemy is afflicted with any element and deal damage accordingly. After that, it will change the affliction.
        if(this.state.enemy_affliction === beats) {
            let enemyCritHealth = Number(this.state.enemy_health - (val * 2))
            this.setState({ enemy_health: enemyCritHealth })
        } else { 
            let enemyHealth = Number(this.state.enemy_health - val)
            this.setState({ enemy_health: enemyHealth })
        }
        this.setState({ enemy_affliction: elem })
// This section will draw a random combat tarot card for the enemy and play it automatically.
        this.doEnemyTurn();
    }

    doEnemyTurn = async () => {
// Initializing a new deck for the enemy to use.
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        var minorTarot = new Deck(mungedCards);
// drawing the card the enemy will play.
        let enemyCardObject = minorTarot.drawRandom(1)
// This section will determin the element and the strength of the enemy card.
        let enemyCardElement = getCardElement(enemyCardObject.suit)
        let enemyCardBeats = getCardStrength(enemyCardElement)
// Now the enemy uses the card!
        if(this.state.user_affliction === enemyCardBeats) {
            let userCritHealth = Number(this.state.user_health - (enemyCardObject.value * 2))
            this.setState({ user_health: userCritHealth})
        } else {
            let userHealth = Number(this.state.user_health - enemyCardObject.value)
            this.setState({ user_health: userHealth})
        }
        this.setState({ user_affliction: enemyCardElement})
    }

    render() {
        return (
            <div>
                <section className='top-combat-section'></section>
                <section className='bot-combat-section'>
                    <div className='bot-combat-left-div'>
                        <p className="number">Health: {this.state.user_health}</p>
                        <p>Affliction: {this.state.user_affliction}</p>
                    </div>
                    <div className='bot-combat-center-div'>
                        {
                            this.state.current_hand.map((card, i) => <CombatItemComp event={this.handleCardSelect} info={card} key={i} />)
                        }
                    </div>
                    <div className='bot-combat-right-div'>
                        <p className="number">Health: {this.state.enemy_health}</p>
                        <p>Affliction: {this.state.enemy_affliction}</p>
                    </div>
                </section>
            </div>
        )
    }
}
