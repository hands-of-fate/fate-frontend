import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAllCards, getAllUserCards } from './utils/FetchUtils'
import GalleryItemComp from './GalleryItemComp';
import './GalleryPage.css';

export default class GalleryPage extends Component {
    state = {
        all_cards: [],
        user_all_cards: []
    }
    componentDidMount = async () => {
        await this.doFetch();
    }

    doFetch = async () => {
        const all_cards_data = await getAllCards();
        const user_all_cards_data = await getAllUserCards(this.props.token);
        this.setState({ 
            all_cards: all_cards_data, 
            user_all_cards: user_all_cards_data 
        })
    }

    render(){
        return (
            <div className="entireLayout">
                <Link to='/home' >
                    <button>Home</button>
                </Link>
                <p>You have collected {this.state.user_all_cards.length}/78 cards</p> 
                <div className="cardsLayout">
                {
                    this.state.user_all_cards.map((card, i) => 
                            <GalleryItemComp info={card} key={i} />
                    )
                }
                </div>
            </div>
        )
    }
}
