import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoData } from '../TodoData';

type Props = {
  todos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
  isAdding: boolean;
  tempTodo: Todo;
  changingTodosId: number[];
  handleToggleTodo: (todoId: number, completed: boolean) => void;
};

export const TodoList: React.FC<Props> = React.memo(({
  todos,
  handleDeleteTodo,
  isAdding,
  tempTodo,
  changingTodosId,
  handleToggleTodo,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => {
      return (
        <TodoData
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          changingTodosId={changingTodosId}
          handleToggleTodo={handleToggleTodo}
        />
      );
    })}
    {isAdding && (
      <TodoData
        todo={tempTodo}
        key={tempTodo.id}
        handleDeleteTodo={handleDeleteTodo}
        changingTodosId={changingTodosId}
        handleToggleTodo={handleToggleTodo}
      />
    )}
  </section>
));
