module.exports = ({ xray }, url) =>
  new Promise((resolve, reject) => {
    xray(url, `title`)((error, title) => {
      error ? reject(error) : resolve(title)
    })
  })
