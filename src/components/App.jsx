import React from 'react';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';

const TodoList = loadable(() => import('../components/TodoList/TodoList.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />}></Route>
    </Routes>
  );
};

export default App;
