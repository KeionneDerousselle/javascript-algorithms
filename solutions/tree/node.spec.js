const { Node } = require('./index')

describe('Node', () => {
  it('should define a constructor on the Node', () => {
    expect(typeof Node.prototype.constructor).toEqual('function')
  })

  it('should define a data property on a Node', () => {
    const n = new Node('a')

    expect(n.data).toEqual('a')
  })

  it('should define a children property on a Node', () => {
    const n = new Node('a')

    expect(n.children.length).toEqual(0)
  })

  it('should be able to add children to a Node', () => {
    const n = new Node('a')

    n.add('b')
    expect(n.children.length).toEqual(1)
    expect(n.children[0].children).toEqual([])
  })

  it('should be able to remove children from a Node', () => {
    const n = new Node('a')

    n.add('b')
    expect(n.children.length).toEqual(1)
    n.remove('b')
    expect(n.children.length).toEqual(0)
  })
})
