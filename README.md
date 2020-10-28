## electron-router

进程间调用就是这么简单

## 安装

```sh
yarn add @cyyjs/electron-router
```

## 使用

### 主进程

```js
const router = require('@cyyjs/electron-router')

router.get('list', async (query) => {
  return {
    err: '',
    data: {
      a: 1
    }
  }
})
```

### 渲染进程

```js
const api = require('@cyyjs/electron-router')

let { err, data } = await api.get('list', query)
// data: { a: 1 }
```