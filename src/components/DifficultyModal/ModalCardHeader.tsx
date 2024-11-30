import { CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { CircleHelp } from 'lucide-react';

function ModalCardHeader() {
    return (
        <CardHeader className="space-y-0.5 py-5 text-white">
            <div className="item-center flex justify-between">
                <CardTitle className="text-2xl">Pick a difficulty</CardTitle>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CircleHelp  className="mt-1 size-7 text-white" />
                        </TooltipTrigger>
                        <TooltipContent className="space-y-2 bg-slate-100 text-black">
                            <p>
                                <span className="font-bold">Easy</span> 5 Cards
                            </p>
                            <p>
                                <span className="font-bold">Normal</span> 10 Cards
                            </p>
                            <p>
                                <span className="font-bold">Hard</span> 15 Cards
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </CardHeader>
    );
}

export default ModalCardHeader;
