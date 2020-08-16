const { palindrome1, palindrome2 } = require('./index')

const palindromeFns = [ palindrome1, palindrome2 ]

describe.each(palindromeFns)('Palindrome - %p', palindrome => {
  it('should defined the palindrome function', () => {
    expect(typeof palindrome).toEqual('function')
  })

  it('should return that "aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy()
  })

  it('should return that " aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy()
  })

  it('should return that "aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy()
  })

  it('should return that "greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy()
  })

  it('should return that "1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy()
  })

  it('should return that "Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy()
  })

  it('should return that "fish hsif" is a palindrome', () => {
    expect(palindrome('fish hsif')).toBeTruthy()
  })

  it('should return that "pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy()
  })

  it('should return that undefined is not a palindrome', () => {
    expect(palindrome(undefined)).toBeFalsy()
  })

  it('should return that null is not a palindrome', () => {
    expect(palindrome(null)).toBeFalsy()
  })

  it('should return that an empty string is a palindrome', () => {
    expect(palindrome('')).toBeTruthy()
  })
})
