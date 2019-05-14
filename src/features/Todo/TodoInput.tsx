import {css} from 'emotion';
import React, {useState} from 'react';
import {useDispatch} from '../../config/Store';
import { AddTodoCommand } from './Actions/addTodo';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  return (
    <input
      className={styles.root}
      type="text"
      onChange={e => setNewTodo(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          dispatch({
            type: "addTodo",
            value: new AddTodoCommand((e.target as HTMLTextAreaElement).value)
          });
          setNewTodo('');
        }
      }}
      placeholder="What needs to be done?"
      value={newTodo}
    />
  );
}

const styles = {
  root: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `,
};
