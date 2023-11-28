import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    dataTodos: [],
    isRefreshing: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    addTodos(state, action) {
      state.dataTodos.push(action.payload);
    },
    changeTodo(state, action) {
      const index = state.dataTodos.findIndex(
        todo => todo.id === action.payload.id
      );
      state.dataTodos.splice(index, 1, action.payload);
    },
  },
});

export const { addTodos, changeTodo } = todoSlice.actions;
export const todosReducer = persistReducer(
  {
    key: 'ist_todos',
    storage,
    whitelist: ['dataTodos'],
  },
  todoSlice.reducer
);
