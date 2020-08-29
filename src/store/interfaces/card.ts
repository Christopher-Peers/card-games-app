export type Suit =  "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";
export type Rank = number | "J" | "Q" | "K";

export interface Card {
    suit: Suit;
    value: Rank;
}