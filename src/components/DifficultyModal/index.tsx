import { Difficulties } from '@/types.ts';
import DifficultyPicker from '@/components/DifficultyModal/DificultyPicker.tsx';
import ModalCard from './ModalCard.tsx';

interface Props {
    setDifficulty: (difficulty: Difficulties) => void;
}

function DifficultyModal({ setDifficulty }: Props) {
    return (
        <div className="font-bungee fixed inset-0 z-20 flex w-full items-center justify-center bg-black bg-opacity-80">
            <ModalCard>
                <DifficultyPicker setDifficulty={setDifficulty} />
            </ModalCard>
        </div>
    );
}

export default DifficultyModal;
