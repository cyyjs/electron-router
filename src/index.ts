const fileName = process.type === 'browser' ? './server' : './client'
const Router = require(fileName)
interface RouterInterface {
  get (path:string, data:object): Promise<any>
  put (path:string, data:object): Promise<any>
  post (path:string, data:object): Promise<any>
  delete (path:string, data:object): Promise<any>
}
const router = new Router() as RouterInterface
export default router
