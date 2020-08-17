const anagram = require('./index.js')

describe('Anagram', () => {
  it('should define the anagram function', () => {
    expect(typeof anagram).toEqual('function')
  })

  it('should return that "hello" is an anagram of "llohe"', () => {
    expect(anagram('hello', 'llohe')).toBeTruthy()
  })

  it('should return that "rail safety" is an anagram of "fairy tales"', () => {
    expect(anagram('rail safety', 'fairy tales')).toBeTruthy()
  })

  it('should return that "RAIL! SAFETY!" is an anagram of "fairy tales"', () => {
    expect(anagram('RAIL! SAFETY!', 'fairy tales')).toBeTruthy()
  })

  it('should return that "Hi there" is not an anagram of "Bye there"', () => {
    expect(anagram('Hi there', 'Bye there')).toBeFalsy()
  })

  it('should return that "Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy()
  })

  it('should return that "One One" is not an anagram of "Two two two"', () => {
    expect(anagram('One One', 'Two two two')).toBeFalsy()
  })

  it('should return that "One one" is not an anagram of "One one c"', () => {
    expect(anagram('One one', 'One one c')).toBeFalsy()
  })

  it('should return that "A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagram('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy()
  })

  it('should return undefined is not an anagram of "One one c"', () => {
    expect(anagram(undefined, 'One one c')).toBeFalsy()
  })

  it('should return null is not an anagram of "One one c"', () => {
    expect(anagram(null, 'One one c')).toBeFalsy()
  })

  it('should return "hello" is not an anagram of undefined', () => {
    expect(anagram('hello', undefined)).toBeFalsy()
  })

  it('should return "hello" is not an anagram of null', () => {
    expect(anagram('hello', null)).toBeFalsy()
  })
})
