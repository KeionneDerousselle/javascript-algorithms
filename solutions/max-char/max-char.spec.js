const maxChar = require('./index')

describe('Max Char', () => {

  it('should define the maxChar function', () => {
    expect(typeof maxChar).toEqual('function')
  })

  it('when a string is only 1 character long, it should find that character to be the most used', () => {
    expect(maxChar('a')).toEqual('a')
  })

  it('when a string is empty, it should return an empty string', () => {
    expect(maxChar('')).toEqual('')
  })

  it('should find the most frequently used char', () => {
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a')
  })

  it('should find the most frequently used numbers in a string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1')
  })
})

