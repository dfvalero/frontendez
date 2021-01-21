import React, { FC } from 'react';
import { sum } from '@frontendez/utils';

const TextComponent = () => {
    return <div>{sum(20, 31)}</div>;
};

export const Div: FC = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
            <TextComponent />
        </div>
    );
};