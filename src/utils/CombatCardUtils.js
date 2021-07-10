import { suitElement } from '../data/MinorArcanaEffects'

// probably an unnecessary abstraction, but, hey, slightly less code duplication!
export function getCardProperty(cardSuit, strengthOrElement) {
    const suitOrElement = strengthOrElement === 'strength' ? 'suit' : 'element';
    const beatsOrElement = strengthOrElement === 'strength' ? 'beats' : 'element';

    let smelement = suitElement
    let array = smelement.filter(object => cardSuit === object[suitOrElement])
    let string = array[0][beatsOrElement]
    return string
}

export function getCardElement(cardSuit) {
    return getCardProperty(cardSuit, 'element');
}

export function getCardStrength(cardElement) {
    return getCardProperty(cardSuit, 'strength');
}