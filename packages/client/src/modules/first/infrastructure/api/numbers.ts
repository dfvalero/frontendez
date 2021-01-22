import { NumbersRepository } from '../../domain/numbers';

export const numbersRepository: NumbersRepository = {
  getOne: () => 1,
  getMultiple: () => [3, 4],
};
