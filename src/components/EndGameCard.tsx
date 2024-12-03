import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button.tsx';
import { Difficulties, GameOutcomes, ICard } from '@/types.ts';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    gameOutcome: GameOutcomes;
    setGameOutcome: Dispatch<SetStateAction<GameOutcomes | null>>;
    setDifficulty: Dispatch<SetStateAction<Difficulties | null>>;
    setNewGame: Dispatch<SetStateAction<boolean>>;
    setPickedCards: Dispatch<SetStateAction<ICard[]>>;
}

function EndGameCard({ gameOutcome, setDifficulty, setNewGame, setGameOutcome, setPickedCards }: Props) {
    return (
        <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-black bg-opacity-80">
            <Card className="w-fit min-w-72 max-w-[600px] border-2 border-slate-200 bg-green-900 text-center text-white">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        {gameOutcome === GameOutcomes.win ? (
                            <p>
                                You've <span className="capitalize underline">WON!</span> 🎉
                            </p>
                        ) : (
                            "You've lost... 😥"
                        )}
                    </CardTitle>
                    <CardDescription className="text-xl text-white">Want to play again?</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        className="bg-white text-green-950 hover:bg-white hover:opacity-90"
                        onClick={() => {
                            setDifficulty(null);
                            setNewGame(true);
                            setGameOutcome(null);
                            setPickedCards([]);
                        }}
                    >
                        Play again
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default EndGameCard;
