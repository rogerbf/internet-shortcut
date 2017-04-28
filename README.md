# internet-shortcut

Creates a `.url`-file compatible with Chrome, Safari and Explorer.

## usage

```javascript
const shortcut = require(`internet-shortcut`)

shortcut({ url: `example.com` })
.then(console.log)
.catch(console.log)
// /path/to/Example.url
// where "Example" is the title of example.com

shortcut({ url: `www.example.com`, title: `Custom title` })
.then(console.log)
.catch(console.log)
// /path/to/Custom title.url
```

## api

### `shortcut(options)`

- `options` &lt;Object&gt;
