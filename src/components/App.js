import React from 'react';
import AddTodo from './Addtodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer'
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
