import { IState } from './interfaces';

const INITIAL_STATE: IState = {
  lastUpdated: 0,
  todos: [
    'Make the fire!',
    'Fix the breakfast!',
    'Wash the dishes!',
    'Do the mopping!',
  ],
};
export default INITIAL_STATE;
