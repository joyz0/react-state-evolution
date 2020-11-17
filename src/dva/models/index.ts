import { Todos } from './todos'

export interface CombinedTodoState {
  todos: Todos
  visibilityFilter: string
}
