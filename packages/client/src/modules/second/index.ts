import { useModule } from '@frontendez/ui';
import { namesRepository } from './infrastructure/api/names';
import { Home } from './ui/home';

export const useSecondModule = () => useModule(namesRepository);

export const routes = [{ name: 'second-home', path: '/second', component: Home, exact: true }];
