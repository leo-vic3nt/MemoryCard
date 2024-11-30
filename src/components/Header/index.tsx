import cardsPng from '/playing-cards.png';
import GameInstructions from '@/components/Header/GameInstructions.tsx';

function Header() {
    return (
        <div className="flex items-center justify-center font-bungee">
            <div className="flex items-center gap-2">
                <img className="-rotate-12" src={cardsPng} alt="cards" />
                <h1 className="text-4xl text-white lg:text-7xl">Memory Card</h1>
                <img className="rotate-12 -scale-x-100" src={cardsPng} alt="cards" />
            </div>
           <GameInstructions/>
        </div>
    );
}

export default Header;
