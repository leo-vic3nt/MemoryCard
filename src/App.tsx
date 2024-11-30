import { useState } from 'react';
import { Difficulties } from './types.ts';
import DifficultyModal from './components/DifficultyModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);

    return (
        <div className="font-opensans flex flex-grow flex-col justify-between">
            <Header />
            {currentDifficulty ? <div>ayy</div> : <DifficultyModal setDifficulty={setCurrentDifficulty} />}
            <Footer />
        </div>
    );
}

export default App;
