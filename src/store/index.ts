import { createStore } from 'redux'

import rootReducer from './reducers/rootReducer';
import { GlobalState } from './interfaces';
import { removeSpecificDeck } from './actions';

const initialState: GlobalState = {
    decks: [
        {
            id: 1,
            cards: [],
            cardsLeftInDeck: 52,
            hasBeenShuffled: false,
            timeLastShuffled: null
        }
    ]
}

export const store = createStore(rootReducer, initialState)

console.log(store.getState())
store.dispatch(removeSpecificDeck(1))
console.log(store.getState())
