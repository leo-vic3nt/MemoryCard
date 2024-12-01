import axios from 'axios';
import { DeckFetchResponse } from '@/types.ts';

const DECK_API_URI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

async function getNewShuffledDeck(): Promise<DeckFetchResponse> {
    const { data } = await axios.get<DeckFetchResponse>(DECK_API_URI);
    return data;
}

export default { getNewShuffledDeck };
