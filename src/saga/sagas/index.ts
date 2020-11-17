import { SagaIterator, buffers } from 'redux-saga'
import { call, put, fork, throttle } from 'redux-saga/effects'
import * as actions from '../actions'
import * as types from '../constants/ActionTypes'
import { fetchTodos } from '../services'

function* getTodos(): SagaIterator {
  const [todos, error] = yield call(fetchTodos)
  if (error) {
    console.log(error)
    return
  }
  yield put(actions.initTodos(todos))
}

function* watchFetchTodos() {
  yield throttle(1000, types.FETCH_TODOS, getTodos)
}

function* startup() {
  yield fork(getTodos)
}

export default function* root() {
  yield fork(startup)
  yield fork(watchFetchTodos)
}
