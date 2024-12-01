import { useEffect, useState } from 'react';
import { ICard, DeckFetchResponse, Difficulties } from './types.ts';
import DifficultyModal from './components/DifficultyModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import deckService from '@/services/deckService.ts';
import ErrorCard from '@/components/ErrorCard.tsx';
import GameBoard from '@/components/GameBoard';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);
    const [deckId, setDeckId] = useState<string>('');
    const [deck, setDeck] = useState<ICard[]>([]);
    const [pickedCards, setPickedCards] = useState<ICard[]>([]);
    const [error, setError] = useState<string>('');
    const [newGame, setNewGame] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setNewGame(false);

        async function fetchDeck(): Promise<void> {
            try {
                const deckApiResponse: DeckFetchResponse = await deckService.getNewShuffledDeck();
                setDeck(deckApiResponse.cards);
                setDeckId(deckApiResponse.deck_id);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(`Something has gone wrong: ${e.message}`);
                    return;
                }
                setError('Something went wrong');
            } finally {
                setLoading(false);
            }
        }

        void fetchDeck();
    }, [newGame]);

    return (
        <div className="flex flex-grow flex-col justify-between font-opensans">
            <Header />
            <main>
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorCard errorMessage={error} />
                ) : currentDifficulty ? (
                    <GameBoard deck={deck} pickerCards={pickedCards} currentDifficulty={currentDifficulty} />
                ) : (
                    <DifficultyModal setDifficulty={setCurrentDifficulty} />
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
