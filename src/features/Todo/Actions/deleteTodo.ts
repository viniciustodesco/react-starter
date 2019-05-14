import { IState, IAction } from '../../../config/interfaces';


export class DeleteTodoAction implements IAction {
  type = "deleteTodo";
  value: DeleteTodoCommand;
  constructor(_value: DeleteTodoCommand) {
    this.value = _value;
  }
};

export class DeleteTodoCommand {
  itemId: number;
  constructor(_itemId: number = 0) {
    this.itemId = _itemId;
  }
}

export const deleteFunctions = {
  deleteTodo: (action: DeleteTodoCommand, state: IState) => {
    const todos = state.todos.slice();
    todos.splice(action.itemId, 1);
    return { ...state, lastUpdated: Date.now(), todos };
  }
}
