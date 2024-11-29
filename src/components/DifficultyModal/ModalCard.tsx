import React from 'react';

interface Props {
    children: React.ReactNode;
}

function ModalCard({ children }: Props) {
    return <div className="w-1/3 min-w-fit bg-slate-100 rounded-lg p-2t">{children}</div>;
}

export default ModalCard;
