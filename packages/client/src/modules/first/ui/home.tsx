import React from 'react';
import { Div } from '@frontendez/ui';
import { Module, useFirstModule } from '../index';

export const HomePage = () => {
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

export const Home = () => {
  return (
    <Module>
      <HomePage />
    </Module>
  );
};
