import React from 'react';
import { Card, CardContent } from '@/components/ui/card.tsx';
import ModalCardHeader from '@/components/DifficultyModal/ModalCardHeader.tsx';

interface Props {
    children: React.ReactNode;
}

function ModalCard({ children }: Props): React.ReactElement {
    return (
        <Card className="w-1/2 min-w-72 max-w-[400px] border-slate-200 border-2 bg-green-900">
            <ModalCardHeader />
            <CardContent>{children}</CardContent>
        </Card>
    );
}

export default ModalCard;
