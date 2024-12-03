import cardsPng from '/playing-cards.png';
import GameInstructions from '@/components/Header/GameInstructions.tsx';

function Header() {
    return (
        <div className="font-bungee mt-1 flex items-center justify-center">
            <div className="flex items-center gap-2">
                <img className="size-12 -rotate-12 lg:size-20" src={cardsPng} alt="cards" />
                <h1 className="text-4xl text-center text-white lg:text-7xl">Memory Card</h1>
                <img className="size-12 rotate-12 -scale-x-100 lg:size-20" src={cardsPng} alt="cards" />
            </div>
            <GameInstructions />
        </div>
    );
}

export default Header;
