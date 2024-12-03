import { useEffect, useState } from 'react';
import { DeckFetchResponse, Difficulties, GameOutcomes, ICard } from './types.ts';
import DifficultyModal from './components/DifficultyModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import deckService from '@/services/deckService.ts';
import ErrorCard from '@/components/ErrorCard.tsx';
import GameBoard from '@/components/GameBoard';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import CARD_IMAGES_MAPPING from '@/lib/constants.ts';
import { preloadImages } from '@/lib/utils.ts';
import EndGameCard from '@/components/EndGameCard.tsx';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);
    const [deck, setDeck] = useState<ICard[]>([]);
    const [pickedCards, setPickedCards] = useState<ICard[]>([]);
    const [error, setError] = useState<string>('');
    const [newGame, setNewGame] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [gameOutcome, setGameOutcome] = useState<GameOutcomes | null>(null);
    const [nrOfRounds, setNrOfRounds] = useState<number>(0);

    useEffect(() => {
        setNewGame(false);

        async function fetchDeck(): Promise<void> {
            try {
                const deckApiResponse: DeckFetchResponse = await deckService.getNewShuffledDeck();
                setDeck(deckApiResponse.cards);
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

    useEffect(() => {
        preloadImages(CARD_IMAGES_MAPPING);
    }, []);

    return (
        <div className="flex flex-grow flex-col justify-between">
            <Header />
            <main>
                {(() => {
                    if (loading) {
                        return <LoadingSpinner />;
                    }

                    if (error) {
                        return <ErrorCard errorMessage={error} />;
                    }

                    if (!currentDifficulty) {
                        return <DifficultyModal setDifficulty={setCurrentDifficulty} setNrOfRounds={setNrOfRounds} />;
                    }

                    if (currentDifficulty && !gameOutcome) {
                        return (
                            <GameBoard
                                deck={deck}
                                nrOfRounds={nrOfRounds}
                                pickedCards={pickedCards}
                                setPickedCards={setPickedCards}
                                setGameOutcome={setGameOutcome}
                            />
                        );
                    }

                    if (gameOutcome) {
                        return (
                            <EndGameCard
                                gameOutcome={gameOutcome}
                                setNewGame={setNewGame}
                                setGameOutcome={setGameOutcome}
                                setDifficulty={setCurrentDifficulty}
                                setPickedCards={setPickedCards}
                            />
                        );
                    }
                })()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
