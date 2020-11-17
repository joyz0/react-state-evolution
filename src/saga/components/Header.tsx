import React from 'react'
import { useDispatch } from 'react-redux'
import TodoTextInput from './TodoTextInput'
import * as TodoActions from '../actions'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch(TodoActions.addTodo(text))
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  )
}

export default Header
