interface ICard {
    code: string;
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

const enum GameOutcomes {
    win = 'win',
    loss = 'loss',

}

export { Difficulties, GameOutcomes };
export type { DeckFetchResponse, ICard };
