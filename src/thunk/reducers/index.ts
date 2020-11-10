import { combineReducers } from 'redux'
import todos, { Todos } from './todos'
import visibilityFilter, { VisibilityFilter } from './visibilityFilter'

export interface CombinedTodoState {
  todos: Todos
  visibilityFilter: VisibilityFilter
}
const rootReducer = combineReducers<CombinedTodoState>({
  todos,
  visibilityFilter
})

export default rootReducer
