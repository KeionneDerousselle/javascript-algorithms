/* eslint-disable no-unused-vars */

// ------ DIRECTIONS ------
/**
 * NASA wants to deploy rovers to Mars to research a plateau.
 * NASA will send you a list of instructions, showing you how to place rovers and move them to specified locations on the plateau.

 * The plateau is divided up into a grid to simplify navigation.
 * The plateau starts at (0, 0) in the bottom left corner.
 * NASA will send you to total size of the plateau, it's upper bounds in the top right corner.

 * A rover’s position and location will be represented by a combination of x and y co-ordinates
 * and a letter representing one of the four cardinal compass points. ( 1 2 N )
 * An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

 * In order to control a rover , NASA sends a simple string of letters.
 * The possible letters are ‘L’, ‘R’ and ‘M’.
 * ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot.
 * ‘M’ means move forward one grid point, and maintain the same heading.

 *  The Input:
 * 5 5
 * 1 2 N
 * LMLMLMLMM
 * 3 3 E
 * MMRMMRMRRM

 * Should Produce:
 * 1 3 N
 * 5 1 E
*/

// /^\d\s\d\s?$/g <--bounds
// /\d\s\d\s[N|n|E|e|W|w|S|s]/g < -- position
// /[L|l|M|m|R|r]/g < -- movement

const getInstructionsArr = instructions => {
  if (!instructions) throw new Error('You must provide instructions to continue with the mission!')
  const lines = instructions.split('\n')

  if (!lines || !lines[0] || lines[0].length < 1) throw new Error('You must provide instructions to continue with the mission!')

  return lines
}

const parsePlateauBounds = plateauBoundsInstructions => {
  if (!plateauBoundsInstructions.match(/^\d\s\d\s?$/g)) throw new Error('The upper X and Y bounds of the plateau must be positive integers.')

  const plateauBounds = plateauBoundsInstructions.split(' ')

  return {
    lowerX: 0,
    upperX: +plateauBounds[0],
    lowerY: 0,
    upperY: +plateauBounds[1]
  }
}

const parsePosition = positionInstructions => {
  if (!positionInstructions || !positionInstructions.match(/\d\s\d\s[N|n|E|e|W|w|S|s]/g)) throw new Error('The position is not valid. You must supply an x coordinate, y coordinate, and cardinal direction. (1 3 S)')

  const position = positionInstructions.split(' ')

  return {
    x: +position[0],
    y: +position[1],
    orientation: position[2].toUpperCase()
  }
}

const createRover = position => ({
  x: position.x,
  y: position.y,
  orientation: position.orientation
})

const parseMoves = moveInstructions => {
  if (!moveInstructions || !moveInstructions.match(/[L|l|M|m|R|r]/g)) throw new Error('The instructions for movement are not valid. You must supply whether to move, orient left, or orient right. (LMR)')

  return moveInstructions.split('')
}

const moveIsOutOfBounds = (x, y, plateau) =>
  x < plateau.lowerX ||
  x > plateau.upperX ||
  y < plateau.lowerY ||
  y > plateau.upperY

const moveWouldCauseCollision = (x, y, rovers) => rovers.some(r => r.x === x && r.y === y)

const moveRover = (rover, moveInstruction, plateau, rovers) => {
  const { orientation } = rover
  const moveStrategy = movementByOrientation[orientation]

  if (moveInstruction === 'M') {
    const { x: currX, y: currY } = rover
    const { x: newX, y: newY } = moveStrategy.move(currX, currY)

    if (moveIsOutOfBounds(newX, newY, plateau)) throw new Error(`You cannot move to a position that is not on the plateau! Rover: { x: ${currX}, y: ${currY}, orientation: ${orientation} }, New Position: { x: ${newX}, y: ${newY} }`)
    if (moveWouldCauseCollision(newX, newY, rovers)) throw new Error(`You cannot move to a position occupied by another rover! Rover: { x: ${currX}, y: ${currY}, orientation: ${orientation} }, New Position: { x: ${newX}, y: ${newY} }`)

    rover.x = newX
    rover.y = newY

  } else {
    rover.orientation = moveStrategy[moveInstruction]
  }
}

const movementByOrientation = {
  N: {
    L: 'W',
    R: 'E',
    move: (x, y) => ({ x, y: y + 1 })
  },

  E: {
    L: 'N',
    R: 'S',
    move: (x, y) => ({ x: x + 1, y })
  },

  S: {
    L: 'E',
    R: 'W',
    move: (x, y) => ({ x, y: y - 1 })
  },

  W: {
    L: 'S',
    R: 'N',
    move: (x, y) => ({ x: x - 1, y })
  }
}

const generateOutput = movedRovers => movedRovers.reduce((out, rover) => out + `${rover.x} ${rover.y} ${rover.orientation}\r\n`, '')

const conductMission = instructionsStr => {
  const [ plateauInstructions, ...instructions ] = getInstructionsArr(instructionsStr)

  const plateau = parsePlateauBounds(plateauInstructions)

  if (!instructions || instructions.length === 0) throw new Error('You must provide instructions to create and move rovers!')

  const movedRovers = []

  for (let i = 0; i < instructions.length; i += 2) {
    const position = parsePosition(instructions[i])
    const rover = createRover(position)
    const moves = parseMoves(instructions[i + 1])

    for (const moveInstruction of moves) {
      moveRover(rover, moveInstruction, plateau, movedRovers)
    }

    movedRovers.push(rover)
  }

  return generateOutput(movedRovers)
}

export default conductMission
