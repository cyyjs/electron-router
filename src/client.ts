import { ipcRenderer, IpcRendererEvent } from 'electron'
import { Result } from './global'

const emitIpcAsync = async (name:string, data:object) => {
  try {
    ipcRenderer.send(name, data)
  } catch (e) {
    return Promise.resolve({
      err: e.message
    })
  }
  return new Promise((resolve, reject) => {
    ipcRenderer.once(name, (event: IpcRendererEvent, result: Result) => {
      if (result.err) {
        reject(result)
      } else {
        resolve(result)
      }
    })
  })
}
class ClientRouter {
  get (path:string, data:object) {
    return emitIpcAsync(`get:${path}`, data)
  }

  post (path:string, data:object) {
    return emitIpcAsync(`post:${path}`, data)
  }

  put (path:string, data:object) {
    return emitIpcAsync(`put:${path}`, data)
  }

  delete (path:string, data:object) {
    return emitIpcAsync(`delete:${path}`, data)
  }
}

module.exports = ClientRouter
