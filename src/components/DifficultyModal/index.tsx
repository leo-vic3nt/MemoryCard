import { Difficulties } from '../../types.ts';

interface Props {
    setDifficulty: (difficulty: Difficulties) => void;
}

function DifficultyModal({ setDifficulty }: Props) {
    return <div>Test</div>;
}

export default DifficultyModal;


// @todo Finish the modal styling and implement another component on the directory for each button