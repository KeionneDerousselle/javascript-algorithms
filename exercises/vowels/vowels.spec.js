const vowels = require('./index')

describe('Vowels', () => {
  it('should defined vowels as a function', () => {
    expect(typeof vowels).toEqual('function')
  })

  it('should return 0, when a falsy value is passed in', () => {
    expect(vowels(undefined)).toEqual(0)
  })

  it('should return 0, when an empty string is passed in', () => {
    expect(vowels('')).toEqual(0)
  })

  it('should return 5, when the all vowels are passed in', () => {
    expect(vowels('aeiou')).toEqual(5)
  })

  it('should return 5, when all vowels, capitalized, are passed in', () => {
    expect(vowels('AEIOU')).toEqual(5)
  })

  it('should return the number of vowels used, when a string with vowels and consonants are passed in', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5)
  })

  it('should return 0, when no vowels are passed in', () => {
    expect(vowels('bcdfghjkl')).toEqual(0)
  })
})
