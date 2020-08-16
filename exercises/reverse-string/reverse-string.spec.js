const reverse = require('./index')

describe('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

describe('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

describe('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ')
})
