import { useEffect, useState } from 'react';
import { Card, DeckFetchResponse, Difficulties } from './types.ts';
import DifficultyModal from './components/DifficultyModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import deckService from '@/services/deckService.ts';
import ErrorCard from '@/components/ErrorCard.tsx';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);
    const [deckId, setDeckId] = useState<string>('');
    const [deck, setDeck] = useState<Card[] | null>(null);
    const [pickedCards, setPickedCards] = useState<Card[] | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        async function fetchDeck(): Promise<void> {
            try {
                const deckApiResponse: DeckFetchResponse = await deckService.getShuffledDeck();
                setDeck(deckApiResponse.cards);
                setDeckId(deckApiResponse.deck_id);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(`Something has gone wrong: ${e.message}`);
                    return;
                }
                setError('Something went wrong');
            }
        }

        void fetchDeck();
    }, []);

    return (
        <div className="flex flex-grow flex-col justify-between font-opensans">
            <Header />
            <main>
                {!currentDifficulty && <DifficultyModal setDifficulty={setCurrentDifficulty} />}
                {error ? <ErrorCard errorMessage={error} /> : <div>ayy</div>}
            </main>
            <Footer />
        </div>
    );
}

export default App;
