import React from 'react'
import { useDispatch } from 'dva'
import TodoTextInput from './TodoTextInput'
import * as actions from '../actions'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch(actions.addTodo(text))
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  )
}

export default Header
