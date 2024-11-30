import { useState } from 'react';
import { Difficulties } from './types.ts';
import DifficultyModal from './components/DifficultyModal';
import Header from '@/components/Header';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);

    return (
        <div className="flex-grow flex flex-col p-2">
            <Header />
            {currentDifficulty ? null : <DifficultyModal setDifficulty={setCurrentDifficulty} />}
        </div>
    );
}

export default App;
