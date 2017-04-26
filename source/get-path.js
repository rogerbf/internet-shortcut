const { join } = require(`path`)

module.exports = title => join(process.cwd(), `${title}.url`)
