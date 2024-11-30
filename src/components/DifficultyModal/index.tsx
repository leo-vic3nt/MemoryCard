import { Difficulties } from '@/types.ts';
import DifficultyPicker from '@/components/DifficultyModal/DificultyPicker.tsx';
import ModalCard from './ModalCard.tsx';

interface Props {
    setDifficulty: (difficulty: Difficulties) => void;
}

function DifficultyModal({ setDifficulty }: Props) {
    return (
        <div className="fixed inset-0 z-10 flex w-full items-center justify-center">
            <ModalCard>
                <DifficultyPicker setDifficulty={setDifficulty} />
            </ModalCard>
        </div>
    );
}

export default DifficultyModal;
