import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodo } from 'redux/todos/todosSlice';

const TodoItem = ({ todo }) => {
  const { status, product, id, name } = todo;
  const [localId, setLocalId] = useState(id);
  const [localName, setLocalName] = useState(name);

  const dispatch = useDispatch();
  const changeTodoItem = todos => {
    dispatch(changeTodo(todos));
  };

  console.log(todo);

  // changeTodoItem({ ...todo, id: localId, name: localName });

  return (
    <ul>
      <li>
        <input type="checkbox" />
      </li>
      <li>
        <span>{product === '' ? 'xxx' : product}</span>
      </li>
      <li>
        <input type="text" value={localId} onChange={() => setLocalId()} />
      </li>
      <li>
        <svg width={18} height={18}>
          <use href=""></use>
        </svg>
      </li>
      <li>
        <input type="text" value={localName} onChange={() => setLocalName()} />
      </li>
      <li>
        <button type="button">x</button>
      </li>
    </ul>
  );
};

export default TodoItem;
