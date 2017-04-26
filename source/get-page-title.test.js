const title = require(`./get-page-title`)
const xray = require(`x-ray`)()

describe(`get-page-title`, () => {
  it(`gets the page title of the supplied url`, () => {
    const url = `<html><head><title>Example</title></head></html>`
    const expected = `Example`
    return title({ xray }, url).then(title => expect(title).toEqual(expected))
  })

  it(`rejects`, () => {
    const url = undefined
    return title(
      { xray: jest.fn(() => jest.fn(callback => callback(Error(`boom`)))) },
      url
    )
      .then(s => expect(s).toBeUndefined())
      .catch(e => expect(e.message).toEqual(`boom`))
  })
})
