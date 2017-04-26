const getPath = require(`./get-path`)

describe(`get-path`, () => {
  it(`returns a path`, () => {
    const title = `Example file`
    expect(getPath(title)).toEqual(`${process.cwd()}/${title}.url`)
  })
})
