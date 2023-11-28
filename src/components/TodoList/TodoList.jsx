import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, useFormik } from 'formik';
import { addTodos } from 'redux/todos/todosSlice';
import TodoItem from './TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/todosSelectors';

const TodoList = () => {
  const dispatch = useDispatch();
  const addDataInTodos = todos => {
    dispatch(addTodos(todos));
  };
  const isTodos = useSelector(selectTodos);

  const formik = useFormik({
    initialValues: {
      status: true,
      //   status: '',
      product: '',
      id: '',
      name: '',
    },
    onSubmit: values => {
      //   console.log(values);
      addDataInTodos(values);
    },
  });

  return (
    <div>
      <h1>TodoList</h1>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Статус
            <br />
            <input
              id="status"
              type="text"
              name="status"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   value={formik.values.status}
            />
          </label>
          <label>
            Товар
            <br />
            <input
              id="product"
              type="text"
              name="product"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.product}
            />
          </label>
          <label>
            ID
            <br />
            <input
              id="id"
              type="text"
              name="id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.id}
            />
          </label>
          <label>
            Название
            <br />
            <input
              id="name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          <div>
            <button type="button">x</button>
            <button type="submit">+</button>
          </div>
        </form>
      </Formik>
      {isTodos.map(todo => (
        <TodoItem key={nanoid()} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
