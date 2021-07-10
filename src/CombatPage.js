import React, { Component } from 'react'
import { getAllTypedCards } from './utils/FetchUtils'
import Deck from 'card-deck'
import CombatItemComp from './CombatItemComp'
import './CombatPage.css'
import { getCardElement, getCardStrength } from './utils/CombatCardUtils'
import Hero from './assests/the-fool.png'
import qtip from './assests/qtip.png'
import badBack from './assests/bad-back.png'
import disco from './assests/disco.png'
import eye from './assests/eye.png'
import face from './assests/face.png'
import hands from './assests/hands.png'
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

    // nice work on this fetch method! i didn't see any other groups think to abstract their reused fetches like this. Even though you don't reuse this code, it's nice to know that the function is around in case you need to (which is inevitable as the app grows)
    doFetch = async () => {
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        // I just did a replaceAll on vars to make them consts. Some of them might need to be lets, but I think the replace shouuuld be fine
        const minorTarot = new Deck(mungedCards);
        this.setState({ current_deck: minorTarot.drawRandom(56)});
        const currentDeck = new Deck(this.state.current_deck);
        this.setState({ current_hand: currentDeck.drawRandom(4)});
    }

    componentDidMount = async () => {
        await this.doFetch();
    }

    // very cool function--these three parameters are the heart of the game, and it's cool that everything issues from changes to those three things
    handleCardSelect = async (val, elem, beats) => {
// This section will check to see if the enemy is afflicted with any element and deal damage accordingly. After that, it will change the affliction.
// for readability, this function should probably have been broken into a few functions with clear, readable names, like this.enemyLost() and this.userLost, etc 
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
            const newDeck = new Deck(this.state.current_deck)
            let newHand = newDeck.drawRandom(4)
            await this.setState({current_hand: newHand})
        }
    }

    doEnemyTurn = async () => {
// Initializing a new deck for the enemy to use.
        const all_cards_data = await getAllTypedCards('minor');
        let mungedCards = all_cards_data.filter(card => card.value <= 10);
        const minorTarot = new Deck(mungedCards);
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
        let baddies = [badBack, disco, eye, face, hands, qtip]
        const number = Math.ceil(Math.random() * baddies.length)
        const Enemy = baddies[number]
        return (
            <div>
                <section className='top-combat-section'>
                    <div className="hero-div">
                        <img src={Hero} alt='One at the start of their journey' className='the-hero'/>
                    </div>
                    <div className="guide">
                        <img src={Rules} alt='A guide on how to play' className='rules'/>
                    </div>
                    <div className="baddie-div">
                        <img src={Enemy} alt='Those who would uphold' className='enemies' />
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
