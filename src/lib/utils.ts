import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ICard, Difficulties } from '@/types.ts';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

function getRandomCard(deck: ICard[]): ICard {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

function getRoundCards(deck: ICard[], pickedCards: ICard[], currentDifficulty: Difficulties): ICard[] {
    const roundCards: ICard[] = [...pickedCards];
    const cardLimit = currentDifficulty === Difficulties.easy ? 5 : currentDifficulty === Difficulties.normal ? 10 : 15;

    while (roundCards.length < cardLimit) {
        const randomCard = getRandomCard(deck);

        const isAlreadyPicked = pickedCards.some(
            (card) => card.code === randomCard.code && card.suit === randomCard.suit
        );

        if (!isAlreadyPicked) {
            roundCards.push(randomCard);
        }
    }

    return roundCards;
}

export { cn, getRoundCards };
