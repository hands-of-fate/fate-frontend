import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { /*checkIfOwned,*/ doUniqueCards, getAllCards, getAllUserCards } from './utils/FetchUtils'
import GalleryItemComp from './GalleryItemComp';
import './GalleryPage.css';

export default class GalleryPage extends Component {
    state = {
        all_cards: [],
        user_all_cards: [],
        unique_cards: 0
    }
    componentDidMount = async () => {
        await this.doFetch();
    }

    doFetch = async () => {
        const all_cards_data = await getAllCards();
        const user_all_cards_data = await getAllUserCards(this.props.token);
        const uniqueCards = doUniqueCards(user_all_cards_data)
        this.setState({ 
            all_cards: all_cards_data, 
            user_all_cards: user_all_cards_data ,
            unique_cards: uniqueCards
        })
    }

    // doUniqueCards = async (userCards, allCards) => {
    //     let counter = 0
    //     for(let card of userCards) {
    //         if(checkIfOwned(card.name, allCards)) {
    //             counter = counter + 1
    //         }
    //     }
    //     return counter
    // }
    render() {
        console.log(this.state.user_all_cards)
        return (
            <div className="entireLayout">
                <Link to='/home' >
                    <button>Home</button>
                </Link>
                <div className="cardsLayout">
                    {
                        this.state.user_all_cards
                            ? this.state.user_all_cards.map((card, i) => <GalleryItemComp info={card} key={i} />)
                            : <div></div>
                            
                    }
                </div>
                <p className="inventory">You have collected {this.state.unique_cards}/78 cards</p> 
            </div>
        )
    }
}
