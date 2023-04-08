import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;

}

const _App: React.FC<AppProps> = ({ todos, fetchTodos, deleteTodo }) => {
 
  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title} <span onClick={() => deleteTodo(todo.id)}>X</span></div>;
    });
  };

  return (
    <div>
      <button onClick={() => fetchTodos()}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const connector = connect(mapStateToProps, { fetchTodos, deleteTodo  });

export const App = connector(_App);
