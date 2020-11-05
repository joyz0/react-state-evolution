import * as types from '../constants/ActionTypes'

export interface ActionCreators {
  addTodo: typeof addTodo
  deleteTodo: typeof deleteTodo
  editTodo: typeof editTodo
  completeTodo: typeof completeTodo
  completeAllTodos: typeof completeAllTodos
  clearCompleted: typeof clearCompleted
  setVisibilityFilter: typeof setVisibilityFilter
}
export const addTodo = (text: string) => ({ type: types.ADD_TODO, text })
export const deleteTodo = (id: number) => ({ type: types.DELETE_TODO, id })
export const editTodo = (id: number, text: string) => ({
  type: types.EDIT_TODO,
  id,
  text
})
export const completeTodo = (id: number) => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = (filter: string) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})
