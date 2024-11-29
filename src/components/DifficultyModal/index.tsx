import { Difficulties } from '../../types.ts';
import ModalCard from './ModalCard.tsx';

interface Props {
    setDifficulty: (difficulty: Difficulties) => void;
}

function DifficultyModal({ setDifficulty }: Props) {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
            <ModalCard>TEST</ModalCard>
        </div>
    );
}

export default DifficultyModal;
