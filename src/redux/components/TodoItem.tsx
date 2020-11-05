import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import { ActionCreators } from '../actions'
import { TodoItem } from '../reducers/todos'

export interface TodoItemProps extends ActionCreators {
  todo: TodoItem
}
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  completeTodo,
  deleteTodo,
  editTodo
}) => {
  const [editing, setEditing] = useState(false)
  function handleDoubleClick() {
    setEditing(true)
  }
  function handleSave(id: number, text: string) {
    if (text.length === 0) {
      deleteTodo(id)
    } else {
      editTodo(id, text)
    }
    setEditing(false)
  }
  let element = editing ? (
    <TodoTextInput
      text={todo.text}
      editing={editing}
      onSave={(text) => handleSave(todo.id, text)}
    />
  ) : (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />
      <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id)} />
    </div>
  )
  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing
      })}
    >
      {element}
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.exact({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
