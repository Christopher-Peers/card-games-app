import { Card } from './card';

export interface Deck {
    id: number;
    cards: Card[];
    cardsLeftInDeck: number;
    hasBeenShuffled: boolean;
    timeLastShuffled: string | null;
}