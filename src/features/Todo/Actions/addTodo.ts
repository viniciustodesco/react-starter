import { IState, IAction } from '../../../config/interfaces';

export class AddTodoAction implements IAction {
  type = "addTodo";
  value : AddTodoCommand;
  constructor(_value: AddTodoCommand) {
    this.value = _value;
  }
};

export class AddTodoCommand {
  public newItem: string;
  constructor(_newItem: string = "") {
    this.newItem = _newItem;
  }
}

export const addFunctions = {
  addTodo: (action: AddTodoAction, state: IState) => {
    return {
      ...state,
      lastUpdated: Date.now(),
      todos: state.todos.concat(action.value.newItem)
    };
  }
}
