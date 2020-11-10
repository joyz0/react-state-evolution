import axios from 'axios'

export function fetchTodos() {
  return axios.get('/api/todos')
}
