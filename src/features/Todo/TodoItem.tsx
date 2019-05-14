import {css} from 'emotion';
import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from '../../config/Store';
import { DeleteTodoCommand } from './Actions/deleteTodo';

export default function TodoItem({index}: {index: number}) {
  const {todo, deleteTodo} = useTodo(index);

  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

function useTodo(index: number): {todo: string; deleteTodo: () => void} {
  const todo = useMappedState(
    useCallback((state: any) => state.todos[index], [index]),
  );

  const dispatch = useDispatch();
  const deleteTodo = useCallback(() => dispatch({type: 'deleteTodo', value: new DeleteTodoCommand(index)}), [
    index,
  ]);
  return {todo, deleteTodo};
}

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `,
};
