/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-newline */
/* eslint-disable array-bracket-spacing */

const { Tree, Node } = require('./index')

describe('Tree', () => {
  it('starts empty', () => {
    const t = new Tree()

    expect(t.root).toEqual(null)
  })

  it('can traverse breadth first', () => {
    const letters = []
    const t = new Tree()

    t.root = new Node('a')
    t.root.add('b')
    t.root.add('c')
    t.root.children[0].add('d')

    t.traverseBF(node => {
      letters.push(node.data)
    })

    expect(letters).toEqual(['a', 'b', 'c', 'd'])
  })

  it('can traverse depth first', () => {
    const letters = []
    const t = new Tree()

    t.root = new Node('a')
    t.root.add('b')
    t.root.add('c')
    t.root.children[0].add('d')

    t.traverseDF(node => {
      letters.push(node.data)
    })

    expect(letters).toEqual(['a', 'b', 'd', 'c'])
  })
})
