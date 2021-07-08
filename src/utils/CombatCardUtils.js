import { suitElement } from '../data/MinorArcanaEffects'

export function getCardElement(thing) {
    let smelement = suitElement
    let array = smelement.filter(object => thing === object.suit)
    let string = array[0].element
    return string
}