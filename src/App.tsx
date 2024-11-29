import { useState } from 'react';
import { Difficulties } from './types.ts';
import DifficultyModal from './components/DifficultyModal';

function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState<Difficulties | null>(null);

    if (!currentDifficulty) {
        return <DifficultyModal setDifficulty={setCurrentDifficulty}/>;
    }

    return <div className="app"></div>;
}

export default App;
