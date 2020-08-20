const fib = require('./index')

describe('Fib', () => {
  it('should define Fib as a function', () => {
    expect(typeof fib).toEqual('function')
  })

  it('should return 1 when calculating the fib value for 1', () => {
    expect(fib(1)).toEqual(1)
  })

  it('should return 1 when calculating the fib value for 2', () => {
    expect(fib(2)).toEqual(1)
  })

  it('should return 2 when calculating the fib value of 3', () => {
    expect(fib(3)).toEqual(2)
  })

  it('should return 3 when calculating the fib value of 4', () => {
    expect(fib(4)).toEqual(3)
  })

  it('should return 63245986 when calculating the fib value for 39', () => {
    expect(fib(39)).toEqual(63245986)
  })
})
