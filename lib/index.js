const fileName = process.type === 'browser' ? './server' : './client'
const Router = require(fileName)

module.exports = new Router()
