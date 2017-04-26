module.exports = ({ writeFile, open }, { path, title, url }) =>
  new Promise((resolve, reject) => {
    open(path, `wx`, (error, descriptor) => {
      error
      ? reject(error)
      : (
        writeFile(path, `[InternetShortcut]\nURL=${url}\n`, (error, done) => {
          error ? reject(error) : resolve(path)
        })
      )
    })
  })
