import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { ActionCreators } from '../actions'
import { Todos } from '../reducers/todos'

export interface TodoListProps {
  filteredTodos: Todos
  actions: ActionCreators
}
const TodoList: React.FC<TodoListProps> = ({ filteredTodos, actions }) => (
  <ul className="todo-list">
    {filteredTodos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ))}
  </ul>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.exact({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    completeAllTodos: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired
  }).isRequired
}

export default TodoList
