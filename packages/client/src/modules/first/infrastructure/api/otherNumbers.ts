import { NumbersRepository } from '../../domain/numbers';

export const otherNumbersRepository: NumbersRepository = {
  getOne: () => 5,
  getMultiple: () => [6, 7],
};
