import { Home } from './ui/home';
import React, { createContext, FC, useContext } from 'react';
import { NamesRepository } from './domain/names';
import { namesRepository } from './infrastructure/api/names';

const SecondModuleContext = createContext<NamesRepository | null>(null);

export const Module: FC = ({ children }) => {
  return <SecondModuleContext.Provider value={namesRepository}>{children}</SecondModuleContext.Provider>;
};

export const useSecondModule = () => {
  const context = useContext(SecondModuleContext);
  if (context === undefined || context === null) {
    throw new Error('useSecondModule must be used within a SecondModuleContext');
  }

  return context;
};

export const routes = [{ name: 'second-home', path: '/second', component: Home, exact: true }];
