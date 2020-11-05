import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export interface TodoTextInputProps {
  newTodo?: boolean
  onSave: (text: string) => void
  editing?: boolean
  placeholder?: string
  text?: string
}
const TodoTextInput: React.FC<TodoTextInputProps> = (props) => {
  const [text, setText] = useState(props.text || '')
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value.trim()
    if (e.key === 'Enter') {
      props.onSave(text)
      if (props.newTodo) {
        setText('')
      }
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!props.newTodo) {
      props.onSave(e.target.value)
    }
  }

  return (
    <input
      className={classnames({
        edit: props.editing,
        'new-todo': props.newTodo
      })}
      type="text"
      placeholder={props.placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
