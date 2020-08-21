const conductMission = require('./index')

describe('Mars Rover', () => {
  describe('when no instructions are passed to the conductMission fn', () => {
    it('should throw an error about missing instructions', () => {
      expect(() => conductMission()).toThrow(/^You must provide instructions to continue with the mission!$/)
    })
  })

  describe('when an empty string is passed to the conductMission fn', () => {
    it('should throw an error about missing instructions', () => {
      expect(() => conductMission('')).toThrow(/^You must provide instructions to continue with the mission!$/)
    })
  })

  describe('when whitespace is passed to the conductMission fn', () => {
    it('should throw an error about missing instructions', () => {
      expect(() => conductMission('\n')).toThrow(/^You must provide instructions to continue with the mission!$/)
    })
  })

  describe('when invalid plateau bounds are passed to the conductMission fn', () => {
    it('should throw an error about invalid plateau bounds instructions', () => {
      expect(() => conductMission('L M')).toThrow(/^The upper X and Y bounds of the plateau must be positive integers.$/)
    })
  })

  describe('when no rover position instructions are passed to the conductMission fn', () => {
    it('should throw an error about invalid rover position instructions', () => {
      const instructions = '3 3\n'

      expect(() => conductMission(instructions)).toThrow(/^The rover position is not valid. You must supply an x coordinate, y coordinate, and cardinal direction. \(1 3 S\)$/)
    })
  })

  describe('when an invalid rover position is passed to the conductMission fn', () => {
    it('should throw an error about invalid rover position instructions', () => {
      const instructions = `3 3
      P X $`

      expect(() => conductMission(instructions)).toThrow(/^The rover position is not valid. You must supply an x coordinate, y coordinate, and cardinal direction. \(1 3 S\)$/)
    })
  })

  describe('when an invalid move instructions are passed to the conductMission fn', () => {
    it('should throw an error about invalid rover movement instructions', () => {
      const instructions = `3 3
      1 2 N
      JKNOP`

      expect(() => conductMission(instructions)).toThrow(/^The instructions for movement are not valid. You must supply whether to move, orient left, or orient right. \(LMR\)$/)
    })
  })

  describe('when no move instructions are passed to the conductMission fn', () => {
    it('should throw an error about invalid rover movement instructions', () => {
      const instructions = '3 3\n1 2 N\n'

      expect(() => conductMission(instructions)).toThrow(/^The instructions for movement are not valid. You must supply whether to move, orient left, or orient right. \(LMR\)$/)
    })
  })

  describe('when instructions are sent to move a rover positioned to the North to the left', () => {
    it('should not move the rover, but rotate the rover to face West', () => {
      const instructions = '3 3\n1 2 N\nL'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 W')
    })
  })

  describe('when instructions are sent to move a rover positioned to the North to the right', () => {
    it('should not move the rover, but rotate the rover to face East', () => {
      const instructions = '3 3\n1 2 N\nR'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 E')
    })
  })

  describe('when instructions are sent to move a rover positioned to the North', () => {
    it('should not rotate the rover, but move the rover forward in the Y direction', () => {
      const instructions = '3 3\n1 2 N\nM'
      const results = conductMission(instructions)

      expect(results).toBe('1 3 N')
    })
  })

  describe('when instructions are sent to move a rover positioned to the East to the left', () => {
    it('should not move the rover, but rotate the rover to the North', () => {
      const instructions = '3 3\n1 2 E\nL'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 N')
    })
   })

  describe('when instructions are sent to move a rover positioned to the East to the right', () => {
    it('should not move the rover, but rotate the rover to the South', () => {
      const instructions = '3 3\n1 2 E\nR'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 S')
    })
  })

  describe('when instructions are sent to move a rover positioned to the East', () => {
    it('should not rotate the rover, but move the forward in the X direction', () => {
      const instructions = '3 3\n1 2 E\nM'
      const results = conductMission(instructions)

      expect(results).toBe('2 2 E')
    })
  })

  describe('when instructions are sent to move a rover positioned to the South to the left', () => {
    it('should not move the rover, but rotate the rover to face East', () => {
      const instructions = '3 3\n1 2 S\nL'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 E')
    })
  })

  describe('when instructions are sent to move a rover positioned to the South to the right', () => {
    it('should not move the rover, but rotate the rover to face West', () => {
      const instructions = '3 3\n1 2 S\nR'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 W')
    })
   })

  describe('when instructions are sent to move a rover positioned to the South', () => {
    it('should not rotate the rover, but move the rover backwards in the Y direction', () => {
      const instructions = '3 3\n1 2 S\nM'
      const results = conductMission(instructions)

      expect(results).toBe('1 1 S')
    })
   })

  describe('when instructions are sent to move a rover positioned to the West to the left', () => {
    it('should not move the rover, but rotate the rover to face South', () => {
      const instructions = '3 3\n1 2 W\nL'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 S')
    })
   })

  describe('when instructions are sent to move a rover positioned to the West to the right', () => {
    it('should not move the rover, but rotate the rover to face North', () => {
      const instructions = '3 3\n1 2 W\nR'
      const results = conductMission(instructions)

      expect(results).toBe('1 2 N')
    })
  })

  describe('when instructions are sent to move a rover positioned to the West', () => {
    it('should not rotate the rover, but move the rover to backwards in the X direction', () => {
      const instructions = '3 3\n1 2 W\nM'
      const results = conductMission(instructions)

      expect(results).toBe('0 2 W')
    })
  })

  describe('when instructions are sent that would cause two a rovers to collide', () => {
    it('should throw an error about moving a rover outside the bounds of the plateau', () => {
      const instructions = '3 3\n1 2 N\nMRMM\n3 2 E\nLM'

      expect(() => conductMission(instructions)).toThrow(/^You cannot move to a position occupied by another rover! Rover: { x: 3, y: 2, orientation: N }, New Position: { x: 3, y: 3 }$/)
    })
  })

  describe('when instructions are sent that would cause a rover to move outside of the plateau bounds', () => {
    it('should throw an error about moving a rover outside the bounds of the plateau', () => {
      const instructions = '3 3\n1 2 W\nMM'

      expect(() => conductMission(instructions)).toThrow(/^You cannot move to a position that is not on the plateau! Rover: { x: 0, y: 2, orientation: W }, New Position: { x: -1, y: 2 }$/)
    })
  })

  describe('when conducting a successful mission', () => {
    it('should return the new positions of all rovers', () => {
      const instructions = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'
      const results = conductMission(instructions)

      expect(results).toBe('1 3 N\r\n5 1 E')
    })
  })
})
