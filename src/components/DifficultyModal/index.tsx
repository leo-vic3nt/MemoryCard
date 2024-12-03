import { Difficulties } from '@/types.ts';
import DifficultyPicker from '@/components/DifficultyModal/DificultyPicker.tsx';
import ModalCard from './ModalCard.tsx';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    setDifficulty: Dispatch<SetStateAction<Difficulties | null>>;
    setNrOfRounds: Dispatch<SetStateAction<number>>;
}

function DifficultyModal({ setDifficulty, setNrOfRounds }: Props) {
    return (
        <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-black bg-opacity-80 font-bungee">
            <ModalCard>
                <DifficultyPicker setDifficulty={setDifficulty} setNrOfRounds={setNrOfRounds} />
            </ModalCard>
        </div>
    );
}

export default DifficultyModal;
