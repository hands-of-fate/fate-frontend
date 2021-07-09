import request from "superagent";

const URL = 'https://obscure-plains-64849.herokuapp.com';

export async function login(email, password) {
    const data = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: email, 
            password: password
        })
    return data.body.token
}

export async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email, 
            password: password
        })
    return data.body.token
}

export async function getAllCards() {
    const data = await request
        .get(`${URL}/cards`)
    return data.body;
}

export async function getAllUserCards(token) {
    const data = await request
        .get(`${URL}/api/players`)
        .set('Authorization', token)
    const mungedData = (data.body[0])
    console.log(mungedData)
    if (mungedData)
        return mungedData.all_cards
}

export async function checkIfOwned(cardName, userCardsArray) {
    for(let card of userCardsArray){
        if(card.name === cardName)
            return true;
    } return false;
}

export async function getAllTypedCards(type) {
    const data = await request
        .get(`${URL}/cards/${type}`)
    return data.body
}

export async function addCard(token, cardData) {
    const existingCards = await getAllUserCards(token)
    existingCards.push(cardData)
    const { body } = await request
        .put(`${URL}/api/players`)
        .send({ all_cards: JSON.stringify(existingCards) })
        .set('Authorization', token)
    return [body]
}