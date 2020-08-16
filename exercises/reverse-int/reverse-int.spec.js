const reverseInt = require('./index')

describe('Reverse Int', () => {
  it('should define the reverseInt function exists', () => {
    expect(reverseInt).toBeDefined()
  })

  it('should return 0 when 0 is reversed', () => {
    expect(reverseInt(0)).toEqual(0)
  })

  it('should reverse positive numbers', () => {
    expect(reverseInt(5)).toEqual(5)
    expect(reverseInt(15)).toEqual(51)
    expect(reverseInt(90)).toEqual(9)
    expect(reverseInt(2359)).toEqual(9532)
  })

  it('should reverse negative numbers', () => {
    expect(reverseInt(-5)).toEqual(-5)
    expect(reverseInt(-15)).toEqual(-51)
    expect(reverseInt(-90)).toEqual(-9)
    expect(reverseInt(-2359)).toEqual(-9532)
  })
})

