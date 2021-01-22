import React from 'react';
import { Div } from '@frontendez/ui';
import { useFirstModule } from '../index';

export const Home = () => {
  const { getOne, getMultiple } = useFirstModule();

  return (
    <div>
      <Div>I'm a Div</Div>
      <hr />
      <div>One: {getOne()}</div>
      <div>Multiple: {getMultiple().join(', ')}</div>
    </div>
  );
};
