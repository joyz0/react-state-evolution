import { ThunkAction } from 'redux-thunk'
import { CombinedTodoState } from '../reducers'
import * as types from '../constants/ActionTypes'
import { Todos } from '../reducers/todos'
import { fetchTodos } from '../services'
import { ActionCreator, AnyAction } from 'redux'

export interface ActionCreators {
  initTodosAsync: typeof initTodosAsync
  initTodos: typeof initTodos
  addTodo: typeof addTodo
  deleteTodo: typeof deleteTodo
  editTodo: typeof editTodo
  completeTodo: typeof completeTodo
  completeAllTodos: typeof completeAllTodos
  clearCompleted: typeof clearCompleted
  setVisibilityFilter: typeof setVisibilityFilter
}

export const initTodosAsync: () => ThunkAction<
  Promise<void>,
  CombinedTodoState,
  unknown,
  ReturnType<ActionCreators['initTodos']>
> = () => {
  return async (dispatch, getState) => {
    try {
      const res = await fetchTodos()
      if (res.data.success) {
        dispatch(initTodos(res.data.todos))
      } else {
        throw new Error('加载todos失败')
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}

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
