const { capitalize1, capitalize2 } = require('./index')
const capitalizeFns = [ capitalize1, capitalize2 ]

describe.each(capitalizeFns)('Capitalize - %p', capitalize => {
  it('should define capitalize as a function', () => {
    expect(typeof capitalize).toEqual('function')
  })

  it.each([
    [ 'hi there, how is it going?', 'Hi There, How Is It Going?' ],
    [ 'i love breakfast at bill miller bbq', 'I Love Breakfast At Bill Miller Bbq' ],
    [ 'a short sentence', 'A Short Sentence' ],
    [ 'a lazy fox', 'A Lazy Fox' ],
    [ 'look, it is working!', 'Look, It Is Working!' ]
  ])('should capitalize the first letter of every word in a sentence', (input, expectedResult) => {
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
