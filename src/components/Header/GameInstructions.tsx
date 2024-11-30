import { CircleHelp } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

function GameInstructions() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="absolute right-2 size-6 cursor-pointer text-white lg:size-10">
                <CircleHelp />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-green-900">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-bold text-white">Game instructions</AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-1 font-semibold text-slate-200">
                        <ul className="flex flex-col gap-3 pl-5">
                            <li>
                                <strong>Goal</strong>: Remember and select unique cards{' '}
                                <strong>without repeating</strong>
                            </li>
                            <li>
                                <strong>Win Conditions</strong>
                                <li>
                                    - <strong>Easy: </strong>5 unique picks
                                </li>
                                <li>
                                    - <strong>Normal: </strong>10 unique picks
                                </li>
                                <li>
                                    - <strong>Hard: </strong> 15 unique picks
                                </li>
                            </li>
                            <li>
                                <strong>Lose Condition</strong>: Select any card you've already chosen
                            </li>
                        </ul>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className="bg-white text-black hover:text-white hover:opacity-80">
                        Understood
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default GameInstructions;
