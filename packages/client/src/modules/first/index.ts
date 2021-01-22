import { useModule } from '@frontendez/ui';
// import { numbersRepository } from './infrastructure/api/numbers';
import { otherNumbersRepository } from './infrastructure/api/otherNumbers';
import { Home } from './ui/home';

// export const useFirstModule = () => useModule(numbersRepository);
export const useFirstModule = () => useModule(otherNumbersRepository);

export const routes = [
    { name: 'first-home', path: '/first', component: Home, exact: true }
];
