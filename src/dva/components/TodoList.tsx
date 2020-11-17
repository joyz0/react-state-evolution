import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { Todos } from '../models/todos'
import { useSelector, useDispatch } from 'dva'
import { CombinedTodoState } from '../models'
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
