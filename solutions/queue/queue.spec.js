const Queue = require('./index')

describe('Queue', () => {
  it('should define Queue as a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function')
  })

  it('should be able to add elements to a queue', () => {
    const q = new Queue()

    expect(() => {
      q.add(1)
    }).not.toThrow()
  })

  it('can remove elements from a queue', () => {
    const q = new Queue()

    expect(() => {
      q.add(1)
      q.remove()
    }).not.toThrow()
  })

  it('should maintain the order of elements', () => {
    const q = new Queue()

    q.add(1)
    q.add(2)
    q.add(3)
    expect(q.remove()).toEqual(1)
    expect(q.remove()).toEqual(2)
    expect(q.remove()).toEqual(3)
    expect(q.remove()).toEqual(undefined)
  })
})

