import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import * as TodoActions from '../actions'
import { useDispatch } from 'react-redux'
import { TodoItem } from '../reducers/todos'

export interface TodoItemProps {
  todo: TodoItem
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  function handleDoubleClick() {
    setEditing(true)
  }
  function handleSave(id: number, text: string) {
    if (text.length === 0) {
      dispatch(TodoActions.deleteTodo(id))
    } else {
      dispatch(TodoActions.editTodo(id, text))
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
        onChange={() => dispatch(TodoActions.completeTodo(todo.id))}
      />
      <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
      <button
        className="destroy"
        onClick={() => dispatch(TodoActions.deleteTodo(todo.id))}
      />
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
  }).isRequired
}

export default TodoItem
