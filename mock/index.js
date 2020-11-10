const todos = require('./todos')

const defaultMock = {
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list'
    })
  }
}
module.exports = Object.assign(defaultMock, todos)
