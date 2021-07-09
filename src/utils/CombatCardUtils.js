import { suitElement } from '../data/MinorArcanaEffects'

export function getCardElement(cardSuit) {
    let smelement = suitElement
    let array = smelement.filter(object => cardSuit === object.suit)
    let string = array[0].element
    return string
}

export function getCardStrength(cardElement) {
    let smelement = suitElement
    let array = smelement.filter(object => cardElement === object.element)
    let string = array[0].beats
    return string
}