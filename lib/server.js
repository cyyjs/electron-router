const { ipcMain } = require('electron')

const onEvent = (name, fn) => {
  ipcMain.on(name, async (event, data) => {
    const result = {
      err: '',
      data: null
    }
    try {
      result.data = await fn(data)
    } catch (e) {
      result.err = (e && e.message) || e
    }
    event.reply(name, result)
  })
}

module.exports = class ServerRouter {
  get (path, fn) {
    onEvent(`get:${path}`, fn)
  }

  post (path, fn) {
    onEvent(`post:${path}`, fn)
  }

  put (path, fn) {
    onEvent(`put:${path}`, fn)
  }

  delete (path, fn) {
    onEvent(`delete:${path}`, fn)
  }
}
