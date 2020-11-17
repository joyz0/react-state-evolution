import { Todos } from '../models/todos'
import { ActionCreator, AnyAction } from 'redux'

export interface ActionCreators {
  fetchAndInitTodos: typeof fetchAndInitTodos
  initTodos: typeof initTodos
  addTodo: typeof addTodo
  deleteTodo: typeof deleteTodo
  editTodo: typeof editTodo
  completeTodo: typeof completeTodo
  completeAllTodos: typeof completeAllTodos
  clearCompleted: typeof clearCompleted
  setVisibilityFilter: typeof setVisibilityFilter
}

export const fetchAndInitTodos: ActionCreator<AnyAction> = () => ({
  type: 'todos/fetchAndInitTodos'
})

export const initTodos: ActionCreator<AnyAction> = (todos: Todos) => ({
  type: 'todos/initTodos',
  payload: { todos }
})
export const addTodo: ActionCreator<AnyAction> = (text: string) => ({
  type: 'todos/addTodo',
  payload: { text }
})
export const deleteTodo: ActionCreator<AnyAction> = (id: number) => ({
  type: 'todos/deleteTodo',
  payload: { id }
})
export const editTodo: ActionCreator<AnyAction> = (
  id: number,
  text: string
) => ({
  type: 'todos/editTodo',
  payload: {
    id,
    text
  }
})
export const completeTodo: ActionCreator<AnyAction> = (id: number) => ({
  type: 'todos/completeTodo',
  payload: { id }
})
export const completeAllTodos: ActionCreator<AnyAction> = () => ({
  type: 'todos/completeAllTodos'
})
export const clearCompleted: ActionCreator<AnyAction> = () => ({
  type: 'todos/clearCompleted'
})
export const setVisibilityFilter: ActionCreator<AnyAction> = (
  filter: string
) => ({
  type: 'visibilityFilter/setVisibilityFilter',
  payload: { filter }
})
