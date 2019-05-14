export interface IState {
  lastUpdated: number;
  todos: string[];
}

export interface IAction {
  type: string;
  value: ICommand;
}

export interface ICommand {}
