const prepare = require(`./prepare-url`)

describe(`prepare-url`, () => {
  it(`returns the url unmodified`, () => {
    const url = `http://example.com`
    const expected = url
    const actual = prepare(url)
    expect(actual).toEqual(expected)
  })

  it(`returns the url with http protocol added`, () => {
    const url = `example.com`
    const expected = `http://example.com`
    const actual = prepare(url)
    expect(actual).toEqual(expected)
  })
})
