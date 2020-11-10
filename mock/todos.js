const mockjs = require('mockjs')
const Random = mockjs.Random

module.exports = {
  'GET /api/todos': (req, res) => {
    const mockRes = mockjs.mock({
      success: true,
      'todos|1-5': [
        {
          'id|+1': 1,
          'completed|1': true,
          text: function () {
            return Random.cword(5, 7)
          }
        }
      ]
    })
    res.send(mockRes)
  }
}
