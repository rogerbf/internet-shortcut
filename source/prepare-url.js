module.exports = url => (url.slice(0, 7) === `http://` ? url : `http://${url}`)
