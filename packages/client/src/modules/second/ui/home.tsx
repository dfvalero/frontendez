import React from 'react';
import { Div } from '@frontendez/ui';
import { useSecondModule } from '../index';

export const Home = () => {
    const { getName, getNames } = useSecondModule();

    return (
        <div>
            <Div>I'm a Div</Div>
            <hr />
            <div>Name: {getName()}</div>
            <div>Multiple: {getNames().join(', ')}</div>
        </div>
    );
}