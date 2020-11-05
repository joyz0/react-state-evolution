import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import { ActionCreators } from '../actions'
import VisibleTodoList from '../containers/VisibleTodoList'

export interface MainSectionProps {
  todosCount: number
  completedCount: number
  actions: ActionCreators
}
const MainSection: React.FC<MainSectionProps> = ({
  todosCount,
  completedCount,
  actions
}) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
        />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
)

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.exact({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    completeAllTodos: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired
  }).isRequired
}

export default MainSection
