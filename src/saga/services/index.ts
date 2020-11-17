import axios from 'axios'

export function fetchTodos() {
  return axios
    .get('/api/todos')
    .then(function (res) {
      if (res.data.success) {
        return [res.data.todos]
      } else {
        return [null, '加载todos失败']
      }
    })
    .catch(function (e) {
      return [null, '加载todos失败']
    })
}
