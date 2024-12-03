import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ICard } from '@/types.ts';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

function getRandomCard(deck: ICard[]): ICard {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

function shuffleCards(cards: ICard[]) {
    const copy = [...cards];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getRoundCards(deck: ICard[], pickedCards: ICard[], cardLimit: number): ICard[] {
    const roundCards: ICard[] = [...pickedCards];

    while (roundCards.length < cardLimit) {
        const randomCard = getRandomCard(deck);

        const isAlreadyPicked = roundCards.some((card) => card.code === randomCard.code);

        if (!isAlreadyPicked) {
            roundCards.push(randomCard);
        }
    }

    return shuffleCards(roundCards);
}

function preloadImages(imageMappings: Record<string, string>) {
    Object.values(imageMappings).forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

function hasDuplicate(cards: ICard[]) {
    return new Set(cards).size !== cards.length;
}

export { cn, getRoundCards, preloadImages, hasDuplicate };
