import React, { FC } from 'react';

const TextComponent = () => {
    return <div>Test</div>;
};

export const Div: FC = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
            <TextComponent />
        </div>
    );
};