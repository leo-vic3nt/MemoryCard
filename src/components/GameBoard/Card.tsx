import { ICard } from '@/types.ts';
import CARD_IMAGES_MAPPING from '@/lib/constants.ts';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    card: ICard;
    setPickedCards: Dispatch<SetStateAction<ICard[]>>;
}

function Card({ card, setPickedCards }: Props) {
    function handleClick() {
        setPickedCards((cards) => cards.concat(card));
    }

    return (
        <div className="flex rounded-2xl border-[5px] border-white p-3">
            <button role="button" onClick={handleClick} className="transition-all duration-300 hover:scale-105">
                <img src={CARD_IMAGES_MAPPING[card.code]} alt="card" className="w-20 lg:w-36" />
            </button>
        </div>
    );
}

export default Card;
