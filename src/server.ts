import { ipcMain, IpcMainEvent } from 'electron'
import { Result } from './global'

const onEvent = (name:string, fn:Function) => {
  ipcMain.on(name, async (event: IpcMainEvent, data:object) => {
    const result: Result = {
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

class ServerRouter {
  get (path:string, fn:Function) {
    onEvent(`get:${path}`, fn)
  }

  post (path:string, fn:Function) {
    onEvent(`post:${path}`, fn)
  }

  put (path:string, fn:Function) {
    onEvent(`put:${path}`, fn)
  }

  delete (path:string, fn:Function) {
    onEvent(`delete:${path}`, fn)
  }
}

module.exports = ServerRouter
