import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import CombatItemComp from './CombatItemComp'
import './CombatPage.css'

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

    handleCardSelect = (val, elem) => {
        console.log(elem)
        let enemyHealth = Number(this.state.enemy_health - val)
        this.setState({ enemy_health: enemyHealth, enemy_affliction: elem })
        
        
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
