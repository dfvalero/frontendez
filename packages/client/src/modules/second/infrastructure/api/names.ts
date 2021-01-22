import { NamesRepository } from '../../domain/names';

export const namesRepository: NamesRepository = {
  getName: () => 'David',
  getNames: () => ['Ronny', 'Julio', 'David'],
};
