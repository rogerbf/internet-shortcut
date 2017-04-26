const write = require(`./write-file`)

describe(`write-file`, () => {
  it(`resolves with path to file`, () => {
    const mockWrite = jest.fn((path, data, callback) => callback(null))
    const mockOpen = jest.fn((path, flags, callback) => callback(null))
    const url = `http://www.example.com`
    const title = `Example`
    const path = `${process.cwd()}/${title}.url`

    return write({ open: mockOpen, writeFile: mockWrite }, { title, url, path })
      .then(result => {
        expect(mockOpen).toHaveBeenCalled()
        expect(mockWrite).toHaveBeenCalled()
        expect(result).toEqual(`${process.cwd()}/${title}.url`)
      })
      .catch(error => expect(error).toBeUndefined())
  })

  it(`rejects on write error`, () => {
    const mockWrite = jest.fn((path, data, callback) => callback(Error(`boom`)))
    const mockOpen = jest.fn((path, flags, callback) => callback(null))

    return (
      write(
        { open: mockOpen, writeFile: mockWrite },
        { title: undefined, url: undefined }
      )
      .then(result => expect(result).toBeUndefined())
      .catch(error => expect(error.message).toEqual(`boom`)))
  })

  it(`rejects on open error`, () => {
    const mockWrite = jest.fn((path, data, callback) => callback(null))
    const mockOpen = jest.fn((path, flags, callback) => callback(Error(`boom`)))

    return (
      write(
        { open: mockOpen, writeFile: mockWrite },
        { title: undefined, url: undefined }
      )
      .then(result => expect(result).toBeUndefined())
      .catch(error => {
        expect(error.message).toEqual(`boom`)
        expect(mockWrite).not.toHaveBeenCalled()
      })
    )
  })
})
