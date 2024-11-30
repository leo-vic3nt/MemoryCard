import { Difficulties } from '@/types.ts';
import { Button } from '@/components/ui/button.tsx';

interface Props {
    setDifficulty: (difficulty: Difficulties) => void;
}

function DifficultyPicker({ setDifficulty }: Props): React.ReactElement {
    return (
        <div className="flex justify-center gap-3">
            <Button
                className="font-bold hover:scale-105"
                variant="outline"
                onClick={() => setDifficulty(Difficulties.easy)}
            >
                Easy
            </Button>
            <Button
                className="font-bold hover:scale-105"
                variant="outline"
                onClick={() => setDifficulty(Difficulties.normal)}
            >
                Normal
            </Button>
            <Button
                className="font-bold hover:scale-105"
                variant="outline"
                onClick={() => setDifficulty(Difficulties.hard)}
            >
                Hard
            </Button>
        </div>
    );
}

export default DifficultyPicker;
