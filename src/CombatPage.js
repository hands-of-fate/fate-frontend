import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import CombatItemComp from './CombatItemComp'

export default class CombatPage extends Component {
    state = {
        current_deck: [],
        current_hand: [],
        enemy_health: 20,
        enemy_affliction: '',
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

    handleCardSelect = (e) => {
        let enemyHealth = Number(this.state.enemy_health - e.target.value)
        this.setState({ enemy_health: enemyHealth })
        console.log(e.target.value, 'e target value')
        console.log(this.state.enemy_health, 'enemy health')
    }

    render() {
        return (
            <div>
                <section className='top-combat-section'></section>
                <section className='bot-combat-section'>
                    <div className='bot-combat-left-div'></div>
                    <div className='bot-combat-center-div'>
                        {
                            this.state.current_hand.map((card, i) => <CombatItemComp event={this.handleCardSelect} info={card} key={i} />)
                        }
                    </div>
                    <div className='bot-combat-right-div'></div>
                </section>
            </div>
        )
    }
}
