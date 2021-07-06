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
    //console.log(data, 'this is data')
    const mungedData = (data.body)
    
    return mungedData;
}

export async function checkIfOwned(cardName, userCardsArray) {
    for(let card of userCardsArray){
        if(card.name === cardName)
            return true;
    } return false;
}