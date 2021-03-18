const { ipcRenderer } = require('electron')

const emitIpcAsync = async (name, data) => {
  try {
    ipcRenderer.send(name, data)
  } catch (e) {
    return Promise.resolve({
      err: e.message
    })
  }
  return new Promise((resolve, reject) => {
    ipcRenderer.once(name, (event, result) => {
      if (result.err) {
        reject(result)
      } else {
        resolve(result)
      }
    })
  })
}
module.exports = class ClientRouter {
  get (path, data) {
    return emitIpcAsync(`get:${path}`, data)
  }

  post (path, data) {
    return emitIpcAsync(`post:${path}`, data)
  }

  put (path, data) {
    return emitIpcAsync(`put:${path}`, data)
  }

  delete (path, data) {
    return emitIpcAsync(`delete:${path}`, data)
  }
}
