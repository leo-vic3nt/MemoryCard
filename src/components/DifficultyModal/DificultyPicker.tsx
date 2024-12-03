import { Difficulties } from '@/types.ts';
import { Button } from '@/components/ui/button.tsx';
import { Dispatch, SetStateAction, ReactElement } from 'react';

interface Props {
    setDifficulty: Dispatch<SetStateAction<Difficulties | null>>;
    setNrOfRounds: Dispatch<SetStateAction<number>>;
}

function DifficultyPicker({ setDifficulty, setNrOfRounds }: Props): ReactElement {
    function handleClick(difficulty: Difficulties) {
        switch (difficulty) {
            case Difficulties.easy:
                setNrOfRounds(5);
                break;
            case Difficulties.normal:
                setNrOfRounds(10);
                break;
            default:
                setNrOfRounds(15);
        }

        setDifficulty(difficulty);
    }

    return (
        <div className="flex justify-center gap-3">
            <Button
                className="font-medium hover:scale-105"
                variant="outline"
                onClick={() => handleClick(Difficulties.easy)}
            >
                Easy
            </Button>
            <Button
                className="font-medium hover:scale-105"
                variant="outline"
                onClick={() => handleClick(Difficulties.normal)}
            >
                Normal
            </Button>
            <Button
                className="font-medium hover:scale-105"
                variant="outline"
                onClick={() => handleClick(Difficulties.hard)}
            >
                Hard
            </Button>
        </div>
    );
}

export default DifficultyPicker;
