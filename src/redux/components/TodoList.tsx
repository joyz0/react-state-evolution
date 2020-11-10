import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { ActionCreators } from '../actions'
import { Todos } from '../reducers/todos'
import { fetchTodos } from '../services'

export interface TodoListProps {
  filteredTodos: Todos
  actions: ActionCreators
}
const TodoList: React.FC<TodoListProps> = ({ filteredTodos, actions }) => {
  useEffect(() => {
    fetchTodos()
      .then(function (res) {
        if (res.data.success) {
          actions.initTodos(res.data.todos)
        } else {
          throw new Error('加载todos失败')
        }
      })
      .catch(function (e) {
        console.log(e.message)
      })
  }, [])
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.exact({
    initTodos: PropTypes.func.isRequired,
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
