const shortcut = require(`./internet-shortcut`)

describe(`internet-shortcut`, () => {
  it(`happy path with no title`, () => {
    const prepare = jest.fn(() => `http://www.example.com`)
    const getTitle = jest.fn(() => Promise.resolve(`Example`))
    const getPath = jest.fn(() => Promise.resolve(`some/path/Example.url`))
    const writeFile = jest.fn(() => Promise.resolve(`some/path/Example.url`))

    const dependencies = {
      prepare,
      getTitle,
      writeFile,
      getPath
    }

    return (
      shortcut(dependencies, { url: `www.example.com` })
      .then(path => expect(path).toEqual(`some/path/Example.url`))
    )
  })

  it(`happy path with title`, () => {
    const prepare = jest.fn(() => `http://www.example.com`)
    const getTitle = jest.fn(() => Promise.resolve(`Example`))
    const getPath = jest.fn(() => Promise.resolve(`some/path/Custom.url`))
    const writeFile = jest.fn(() => Promise.resolve(`some/path/Custom.url`))

    const dependencies = {
      prepare,
      getTitle,
      writeFile,
      getPath
    }

    return (
      shortcut(dependencies, { url: `www.example.com`, title: `Custom` })
      .then(path => {
        expect(path).toEqual(`some/path/Custom.url`)
        expect(getTitle).not.toHaveBeenCalled()
      })
    )
  })
})
