interface CardImages {
    svg: string;
    png: string;
}

interface ICard {
    code: string;
    images: CardImages;
    value: string;
    suit: string;
}

interface DeckFetchResponse {
    deck_id: string;
    cards: ICard[];
}

const enum Difficulties {
    easy = 'easy',
    normal = 'normal',
    hard = 'hard',
}

export { Difficulties };
export type { DeckFetchResponse, ICard };
