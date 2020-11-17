import React, { useCallback } from 'react'
import Footer from './Footer'
import { useSelector, useDispatch } from 'dva'
import { CombinedTodoState } from '../models'
import TodoList from './TodoList'
import { getCompletedTodoCount } from '../selectors'
import * as actions from '../actions'

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
          <label onClick={() => dispatch(actions.completeAllTodos())} />
        </span>
      )}
      <TodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => dispatch(actions.clearCompleted())}
        />
      )}
    </section>
  )
}

export default MainSection
