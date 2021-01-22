import React, { FC } from 'react';
import { otherNumbersRepository } from './infrastructure/api/otherNumbers';
import { Home } from './ui/home';
import { createContext, useContext } from 'react';
import { NumbersRepository } from './domain/numbers';

const FirstModuleContext = createContext<NumbersRepository | null>(null);

export const Module: FC = ({ children }) => {
  return <FirstModuleContext.Provider value={otherNumbersRepository}>{children}</FirstModuleContext.Provider>;
};

export const useFirstModule = () => {
  const context = useContext(FirstModuleContext);
  if (context === undefined || context === null) {
    throw new Error('useFirstModule must be used within a FirstModuleContext');
  }

  return context;
};

export const routes = [{ name: 'first-home', path: '/first', component: Home, exact: true }];
