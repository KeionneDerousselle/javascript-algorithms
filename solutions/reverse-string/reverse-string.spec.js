const { reverse1, reverse2, reverse3, reverse4 } = require('./index')

const reverseFns = [
  reverse1,
  reverse2,
  reverse3,
  reverse4
]

describe.each(reverseFns)('Reverse - %p', reverse => {
  it('should define the reverse function', () => {
    expect(reverse).toBeDefined()
  })

  it('should reverse a string', () => {
    expect(reverse('abcd')).toEqual('dcba')
  })

  it('should reverse a string with whitespace', () => {
    expect(reverse('  abcd')).toEqual('dcba  ')
  })

  it('should return an empty string for undefined', () => {
    expect(reverse(undefined)).toEqual('')
  })

  it('should return an empty string for empty string', () => {
    expect(reverse('')).toEqual('')
  })

  it('should return an empty string for null', () => {
    expect(reverse(null)).toEqual('')
  })
})
