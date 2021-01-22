import { RouteProps } from 'react-router-dom';

import { routes as firstRoutes } from './first';
import { routes as secondRoutes } from './second';

interface Route extends RouteProps {
  name: string;
}

export const routes: Route[] = [...firstRoutes, ...secondRoutes];
