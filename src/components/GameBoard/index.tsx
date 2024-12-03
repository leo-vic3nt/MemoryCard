import { Dispatch, SetStateAction, useEffect } from 'react';
import { GameOutcomes, ICard } from '@/types.ts';
import Card from '@/components/GameBoard/Card.tsx';
import { getRoundCards, hasDuplicate } from '@/lib/utils.ts';

interface Props {
    deck: ICard[];
    pickedCards: ICard[];
    setPickedCards: Dispatch<SetStateAction<ICard[]>>;
    setGameOutcome: Dispatch<SetStateAction<GameOutcomes | null>>;
    nrOfRounds: number;
}

function GameBoard({ deck, pickedCards, setPickedCards, nrOfRounds, setGameOutcome }: Props) {
    const roundCards = getRoundCards(deck, pickedCards, nrOfRounds);

    useEffect(() => {
        if (hasDuplicate(pickedCards)) {
            setGameOutcome(GameOutcomes.loss);
            return;
        }

        if (pickedCards.length === nrOfRounds) {
            setGameOutcome(GameOutcomes.win);
            return;
        }
    }, [nrOfRounds, pickedCards, setGameOutcome]);

    return (
        <div className="mx-auto my-12 flex max-w-7xl flex-wrap justify-center gap-5">
            {roundCards.map((card) => (
                <Card key={card.code} card={card} setPickedCards={setPickedCards} />
            ))}
        </div>
    );
}

export default GameBoard;
