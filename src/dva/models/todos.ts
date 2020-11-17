import { Effect, EffectType, Subscription } from 'dva'
import { Reducer } from 'redux'
import { fetchTodos } from '../services'
import * as actions from '../actions'

export interface TodoItem {
  text: string
  completed: boolean
  id: number
}
export type Todos = TodoItem[]

type EffectWithType = [Effect, { type: EffectType; ms: number }]

export interface TodosDvaModel {
  namespace: string
  state: Todos
  reducers: {
    initTodos: Reducer<Todos>
    addTodo: Reducer<Todos>
    deleteTodo: Reducer<Todos>
    editTodo: Reducer<Todos>
    completeTodo: Reducer<Todos>
    completeAllTodos: Reducer<Todos>
    clearCompleted: Reducer<Todos>
  }
  effects: {
    fetchAndInitTodos: EffectWithType
  }
  subscriptions: {
    setup: Subscription
  }
}

const initialState: Todos = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const Model: TodosDvaModel = {
  namespace: 'todos',
  state: initialState,
  reducers: {
    initTodos(state, { payload }) {
      return payload
    },
    addTodo(state = initialState, { payload: { text } }) {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text
        }
      ]
    },
    deleteTodo(state = initialState, { payload: { id } }) {
      return state.filter((todo) => todo.id !== id)
    },
    editTodo(state = initialState, { payload: { id, text } }) {
      return state.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    },
    completeTodo(state = initialState, { payload: { id } }) {
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    },
    completeAllTodos(state = initialState, { payload }) {
      const areAllMarked = state.every((todo) => todo.completed)
      return state.map((todo) => ({
        ...todo,
        completed: !areAllMarked
      }))
    },
    clearCompleted(state = initialState, { payload }) {
      return state.filter((todo) => todo.completed === false)
    }
  },
  effects: {
    fetchAndInitTodos: [
      function* ({ payload }, { put, call }) {
        const [todos, error] = yield call(fetchTodos)
        if (error) {
          console.log(error)
          return
        }
        yield put({ type: 'initTodos', payload: todos })
      },
      { type: 'throttle', ms: 1000 }
    ]
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch(actions.fetchAndInitTodos())
    }
  }
}
export default Model
