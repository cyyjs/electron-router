let Router = null

if (process.type === 'browser') {
  Router = require('./server')
} else {
  Router = require('./client')
}

module.exports = new Router()
