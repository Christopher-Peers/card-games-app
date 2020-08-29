import { Deck } from "../interfaces";

export enum DeckActions {
    AddNewDeck = 'DECKS/ADD_NEW_DECK',
    RemoveSpecificDeck = 'DECKS/REMOVE_DECK'
}

export const addNewDeck = (newDeck: Deck) => ({
    type: DeckActions.AddNewDeck,
    payload: newDeck
});

export const removeSpecificDeck = (id: number) => ({
    type: DeckActions.RemoveSpecificDeck,
    payload: id
});