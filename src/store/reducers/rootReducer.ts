import { Deck, GlobalState } from '../interfaces';

export default function rootReducer(state: any, action: any) {
    if (action.type === 'DECKS/ADD_NEW_DECK') {
            return {
                ...state,
                decks: [...state.decks, action.payload]
            }
    } if (action.type === 'DECKS/REMOVE_DECK') {
        const filteredDecks = state.decks.filter((deck: Deck) => deck.id !== action.payload);
        return {
            ...state,
            decks: filteredDecks
        }
    }
    return state;
}