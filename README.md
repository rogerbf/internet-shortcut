# internet-shortcut

Creates a `.url` file compatible with Chrome, Safari and Explorer.

## usage

```javascript
const shortcut = require(`internet-shortcut`)

shortcut({ url: `example.com` })
.then(console.log)
.catch(console.log)
// /path/to/Example.url
```

## api

### `shortcut(options)`
