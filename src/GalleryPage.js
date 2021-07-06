import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { checkIfOwned, getAllCards, getAllUserCards } from './FetchUtils'
import GalleryItemComp from './GalleryItemComp';

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
        await this.setState({ 
            all_cards: all_cards_data, 
            user_all_cards: user_all_cards_data 
        })
    }

    render(){
        //console.log(this.state.user_all_cards)
        return (
            <div>
                <p>You have collected {this.state.user_all_cards.length}/78 cards</p> 
                {
                    this.state.user_all_cards.map((card, i) => 
                            <GalleryItemComp info={card} key={i} />
                    )
                }
                <Link to='/home' >
                    <button>Home</button>
                </Link>
            </div>
        )
    }
}
