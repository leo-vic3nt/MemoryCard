interface CardImages {
    svg: string;
    png: string;
}

interface Card {
    code: string;
    images: CardImages;
    value: string;
    suit: string;
}

interface DeckFetchResponse {
    deck_id: string;
    cards: Card[];
}

const enum Difficulties {
    easy = 'easy',
    normal = 'normal',
    hard = 'hard',
}

export { Difficulties };
export type { DeckFetchResponse, Card };
