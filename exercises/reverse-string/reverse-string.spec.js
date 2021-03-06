const reverse = require('./index')

describe('Reverse', () => {
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
