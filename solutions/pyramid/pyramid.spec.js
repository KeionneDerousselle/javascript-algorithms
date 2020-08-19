const pyramid = require('./index')

describe('Pyramid', () => {
  beforeEach(() => {
    console.log = jest.fn().mockImplementation(() => {})
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('should define pyramid as a function', () => {
    expect(typeof pyramid).toEqual('function')
  })

  it('should print an empty string if a falsy value is provided', () => {
    pyramid(undefined)
    expect(console.log.mock.calls[0][0]).toEqual('')
  })

  it('should print an empty string if a negative value is provided', () => {
    pyramid(-2)
    expect(console.log.mock.calls[0][0]).toEqual('')
  })

  it('should print a pyramid for n = 2', () => {
    pyramid(2)
    expect(console.log.mock.calls[0][0]).toEqual(' # ')
    expect(console.log.mock.calls[1][0]).toEqual('###')
    expect(console.log.mock.calls.length).toEqual(2)
  })

  it('should print a pyramid for n = 3', () => {
    pyramid(3)
    expect(console.log.mock.calls[0][0]).toEqual('  #  ')
    expect(console.log.mock.calls[1][0]).toEqual(' ### ')
    expect(console.log.mock.calls[2][0]).toEqual('#####')
    expect(console.log.mock.calls.length).toEqual(3)
  })

  it('should print a pyramid for n = 4', () => {
    pyramid(4)
    expect(console.log.mock.calls[0][0]).toEqual('   #   ')
    expect(console.log.mock.calls[1][0]).toEqual('  ###  ')
    expect(console.log.mock.calls[2][0]).toEqual(' ##### ')
    expect(console.log.mock.calls[3][0]).toEqual('#######')
    expect(console.log.mock.calls.length).toEqual(4)
  })
})
