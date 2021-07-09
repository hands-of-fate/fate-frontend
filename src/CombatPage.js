import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import CombatItemComp from './CombatItemComp'
import './CombatPage.css'
import { getCardElement, getCardStrength } from './utils/CombatCardUtils'
import Hero from './assests/the-fool.png'
import Baddie from './assests/the-better-bad-back.png'
import Rules from './assests/element-wheel.png'

export default class CombatPage extends Component {
    state = {
        current_deck: [],
        current_hand: [],
        user_health: 50,
        user_affliction: 'Pure',
        enemy_health: 50,
        enemy_affliction: 'Pure',
        enemy_card: [],
        loss_trigger: false,
        outcome: ''
    }

    doFetch = async () => {
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        var minorTarot = new Deck(mungedCards);
        this.setState({ current_deck: minorTarot.drawRandom(56)});
        var currentDeck = new Deck(this.state.current_deck);
        this.setState({ current_hand: currentDeck.drawRandom(4)});
    }

    componentDidMount = async () => {
        await this.doFetch();
    }

    handleCardSelect = async (val, elem, beats) => {
// This section will check to see if the enemy is afflicted with any element and deal damage accordingly. After that, it will change the affliction.
        if(this.state.enemy_affliction === beats) {
            let enemyCritHealth = Number(this.state.enemy_health - (val * 2))
            await this.setState({ enemy_health: enemyCritHealth })
        } else if(getCardStrength(this.state.enemy_affliction) === elem) {
            let enemyCritFailHealth = Number(this.state.enemy_health - Math.round(val / 2))
            await this.setState({ enemy_health: enemyCritFailHealth})
        } else { 
            let enemyHealth = Number(this.state.enemy_health - val)
            await this.setState({ enemy_health: enemyHealth })
        }
        this.setState({ enemy_affliction: elem })
// This section will draw a random combat tarot card for the enemy and play it automatically.
        if (this.state.enemy_health <= 0) {
            setTimeout(() =>  this.props.history.push('/rewards'), 1000)
        } else { 
            await this.doEnemyTurn() 
        }
        // checking to see if user is still alive
        if (this.state.user_health < 1) {
            await this.setState({ loss_trigger: true })
            setTimeout(() => this.doGameOver(), 1000)
        } else {
            var newDeck = new Deck(this.state.current_deck)
            let newHand = newDeck.drawRandom(4)
            await this.setState({current_hand: newHand})
        }
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

    doGameOver = () => {
        if (this.state.loss_trigger) {
            this.props.history.push('/home')
        }
    }



    render() {
        return (
            <div>
                <section className='top-combat-section'>
                    <div className="hero-div">
                        <img src={Hero} alt='One at the start of their journey' className='the-hero'/>
                    </div>
                    <div className="guide">
                        <img src={Rules} alt='A guide on how to play' className='rules'/>
                    </div>
                    <div>
                        <img src={Baddie} alt='Those who would uphold' className='enemies' />
                    </div>
                </section>
                <section className='bot-combat-section'>
                    <div className='bot-combat-left-div'>
                        <p>
                            - The Fool -
                        </p>
                        <p className="number">
                            Health: {this.state.user_health}
                        </p>
                        <p>
                            Affliction: {this.state.user_affliction}
                        </p>
                    </div>
                    <div className='bot-combat-center-div'>
                        {
                            this.state.current_hand.map((card, i) => <CombatItemComp event={this.handleCardSelect} info={card} key={i} />)
                        }
                    </div>
                    <div className='bot-combat-right-div'>
                        <p>
                            - The Will of Fate -
                        </p>
                        <p className="number">
                            Health: {this.state.enemy_health}
                        </p>
                        <p>
                            Affliction: {this.state.enemy_affliction}
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}
