import React, { useCallback } from 'react'
import Footer from './Footer'
import * as TodoActions from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { CombinedTodoState } from '../reducers'
import TodoList from './TodoList'
import { getCompletedTodoCount } from '../selectors'

const MainSection: React.FC = () => {
  const todosCount = useSelector<CombinedTodoState, number>(
    (state) => state.todos.length
  )
  const completedCount = useSelector<CombinedTodoState, number>(
    getCompletedTodoCount
  )
  const dispatch = useDispatch()
  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={() => dispatch(TodoActions.completeAllTodos())} />
        </span>
      )}
      <TodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => dispatch(TodoActions.clearCompleted())}
        />
      )}
    </section>
  )
}

export default MainSection
