import React from 'react';

interface Props {
    children: React.ReactNode;
}

function ModalCard({ children }: Props) {
    return <div>{children}</div>;
}

export default ModalCard;
