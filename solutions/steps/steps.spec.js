/* eslint-disable no-console */
const { steps1, steps2 } = require('./index')
const stepsFns = [ steps1, steps2 ]

describe.each(stepsFns)('Steps - %p', steps => {
  beforeEach(() => {
    console.log = jest.fn().mockImplementation(() => { })
  })

  afterEach(() => {
    console.log.mockRestore()
  })

  it('should define steps as a function', () => {
    expect(typeof steps).toEqual('function')
  })

  it('should print a single # when steps is called with n = 1', () => {
    steps(1)
    expect(console.log.mock.calls[0][0]).toEqual('#')
    expect(console.log.mock.calls.length).toEqual(1)
  })

  it('should print two lines of #s when steps is called with n = 2', () => {
    steps(2)
    expect(console.log.mock.calls[0][0]).toEqual('# ')
    expect(console.log.mock.calls[1][0]).toEqual('##')
    expect(console.log.mock.calls.length).toEqual(2)
  })

  it('should print 3 lines of #s when steps is called with n = 3', () => {
    steps(3)
    expect(console.log.mock.calls[0][0]).toEqual('#  ')
    expect(console.log.mock.calls[1][0]).toEqual('## ')
    expect(console.log.mock.calls[2][0]).toEqual('###')
    expect(console.log.mock.calls.length).toEqual(3)
  })
})
