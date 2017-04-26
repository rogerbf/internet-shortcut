const xray = require(`x-ray`)()
const { writeFile, open } = require(`fs`)

module.exports = require(`./internet-shortcut`).bind(null, {
  prepare: require(`./prepare-url`),
  getTitle: require(`./get-page-title`).bind(null, { xray }),
  getPath: require(`./get-path`),
  writeFile: require(`./write-file`).bind(null, { writeFile, open })
})
