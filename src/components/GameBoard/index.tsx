import { Difficulties, ICard } from '@/types.ts';

interface Props {
    deck: ICard[];
    pickerCards: ICard[];
    currentDifficulty: Difficulties;
}

function GameBoard({ deck, pickerCards, currentDifficulty }: Props) {
    return <div>ayy</div>;
}

export default GameBoard;
