import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { Todos } from '../reducers/todos'
import { useSelector, useDispatch } from 'react-redux'
import { CombinedTodoState } from '../reducers'
import { getVisibleTodos } from '../selectors'

const TodoList: React.FC = () => {
  const filteredTodos = useSelector<CombinedTodoState, Todos>(getVisibleTodos)
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
