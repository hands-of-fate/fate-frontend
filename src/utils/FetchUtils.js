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
    if (mungedData) {
        return mungedData.all_cards
    } else {
        return []
    }
}

export async function checkIfOwned(cardName, allCardsArray) {
    for(let card of allCardsArray){
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

export async function newUserStarterCard(token) {
    const newStart = [{
        "name": "The Fool",
        "type": "major",
        "value": 0,
        "meaning": "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
        "meaningReverse": "Negligence, absence, distribution, carelessness, apathy, nullity, vanity."
    }]
    const response = await request
        .post(`${URL}/api/players`)
        .send({ all_cards: JSON.stringify(newStart) })
        .set('Authorization', token)
    console.log(response)
    return response.body
}

export function doUniqueCards(userCards) {
    // no need for a let, since you never reassign this--you mutate the array, but that's not reassignment
    const cardNames = []
    for(let userCard of userCards) {
        cardNames.push(userCard.name)
    }
    // is this working? it seems like i (the index) would never match the card name?
    const output = cardNames.filter((cardName, i, a) => a.indexOf(cardName) === i)
    return output.length
}