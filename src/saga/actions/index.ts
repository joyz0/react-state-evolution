import { CombinedTodoState } from '../reducers'
import * as types from '../constants/ActionTypes'
import { Todos } from '../reducers/todos'
import { ActionCreator, AnyAction } from 'redux'

export interface ActionCreators {
  fetchTodos: typeof fetchTodos
  initTodos: typeof initTodos
  addTodo: typeof addTodo
  deleteTodo: typeof deleteTodo
  editTodo: typeof editTodo
  completeTodo: typeof completeTodo
  completeAllTodos: typeof completeAllTodos
  clearCompleted: typeof clearCompleted
  setVisibilityFilter: typeof setVisibilityFilter
}

export const fetchTodos: ActionCreator<AnyAction> = () => ({
  type: types.FETCH_TODOS
})

export const initTodos: ActionCreator<AnyAction> = (todos: Todos) => ({
  type: types.INIT_TODOS,
  todos
})
export const addTodo: ActionCreator<AnyAction> = (text: string) => ({
  type: types.ADD_TODO,
  text
})
export const deleteTodo: ActionCreator<AnyAction> = (id: number) => ({
  type: types.DELETE_TODO,
  id
})
export const editTodo: ActionCreator<AnyAction> = (
  id: number,
  text: string
) => ({
  type: types.EDIT_TODO,
  id,
  text
})
export const completeTodo: ActionCreator<AnyAction> = (id: number) => ({
  type: types.COMPLETE_TODO,
  id
})
export const completeAllTodos: ActionCreator<AnyAction> = () => ({
  type: types.COMPLETE_ALL_TODOS
})
export const clearCompleted: ActionCreator<AnyAction> = () => ({
  type: types.CLEAR_COMPLETED
})
export const setVisibilityFilter: ActionCreator<AnyAction> = (
  filter: string
) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})
