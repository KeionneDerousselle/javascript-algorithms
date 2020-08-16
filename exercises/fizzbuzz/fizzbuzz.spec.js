const fizzBuzz = require('./index')

describe('FizzBuzz', () => {
  beforeEach(() => {
    console.log = jest.fn().mockImplementation(() => { })
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('should define the fizzBuzz function', () => {
    expect(fizzBuzz).toBeDefined()
  })

  it('should print out 5 statements when calling fizzbuzz with `5`', () => {
    fizzBuzz(5)

    expect(console.log.mock.calls.length).toEqual(5)
  })

  it('should print out the correct values when calling fizzbuzz with `15`', () => {
    fizzBuzz(15)

    expect(console.log.mock.calls[0][0]).toEqual(1)
    expect(console.log.mock.calls[1][0]).toEqual(2)
    expect(console.log.mock.calls[2][0]).toEqual('fizz')
    expect(console.log.mock.calls[3][0]).toEqual(4)
    expect(console.log.mock.calls[4][0]).toEqual('buzz')
    expect(console.log.mock.calls[5][0]).toEqual('fizz')
    expect(console.log.mock.calls[6][0]).toEqual(7)
    expect(console.log.mock.calls[7][0]).toEqual(8)
    expect(console.log.mock.calls[8][0]).toEqual('fizz')
    expect(console.log.mock.calls[9][0]).toEqual('buzz')
    expect(console.log.mock.calls[10][0]).toEqual(11)
    expect(console.log.mock.calls[11][0]).toEqual('fizz')
    expect(console.log.mock.calls[12][0]).toEqual(13)
    expect(console.log.mock.calls[13][0]).toEqual(14)
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz')
  })
})
