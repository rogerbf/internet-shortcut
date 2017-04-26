module.exports = (
  { prepare, getTitle, writeFile, getPath },
  { title, url: maybeUrl }
) =>
  Promise.resolve(prepare(maybeUrl))
  .then(url =>
    title
    ? { url, title }
    : getTitle(url).then(fetchedTitle => ({ url, title: fetchedTitle }))
  )
  .then(options => Object.assign({}, options, { path: getPath(options.title) }))
  .then(writeFile)
