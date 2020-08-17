const capitalize = require('./index')

describe('Capitalize', () => {
  it('should define capitalize as a function', () => {
    expect(typeof capitalize).toEqual('function')
  })

  it.each([ [ 'hi there, how is it going?', 'Hi There, How Is It Going?' ], [ 'i love breakfast at bill miller bbq', 'I Love Breakfast At Bill Miller Bbq' ] ])('should capitalize the first letter of every word in a sentence', (input, expectedResult) => {
    expect(capitalize(input)).toEqual(expectedResult)
  })

  it('should capitalize the one letter if only one is provided', () => {
    expect(capitalize('i')).toEqual('I')
  })

  it('should return an empty string when attempting to capitalize an undefined string', () => {
    expect(capitalize(undefined)).toEqual('')
  })

  it('should return an empty string when attempting to capitalize a null string', () => {
    expect(capitalize(null)).toEqual('')
  })

  it('should return an empty string if an empty string is provided', () => {
    expect(capitalize('')).toEqual('')
  })
})
