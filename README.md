## electron-router
![LICENSE](https://img.shields.io/github/license/cyyjs/electron-router)
![npm (scoped)](https://img.shields.io/npm/v/@cyyjs/electron-router)

Communicate asynchronously from the main process to renderer processes it's that simple！

## Install

```sh
yarn add @cyyjs/electron-router
```

## Usage

### Main

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

router.post('save', async(data) => {})
router.put('update', async(data) => {})
router.delete('remove', async(id) => {})
```

### Render

```js
const api = require('@cyyjs/electron-router')

let { err, data } = await api.get('list', query)
// data: { a: 1 }

await api.post('save', {})
await api.put('update', {})
await api.delete('remove', id)
```


