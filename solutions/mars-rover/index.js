/* eslint-disable no-unused-vars */

// ------ DIRECTIONS ------
/**
 * A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
 * This plateau, which is curiously rectangular,
 * must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
 * A rover’s position and location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points.
 * The plateau is divided up into a grid to simplify navigation.
 * An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
 * In order to control a rover, NASA sends a simple string of letters.
 * The possible letters are ‘L’, ‘R’ and ‘M’.
 * ‘L’ and ‘R’ make the rover spin 90 degrees left or right respectively, without moving from its current spot.
 * ‘M’ means move forward one grid point, and maintain the same heading.
 * Assume that the square directly North from (x, y) is (x, y+1).

* Input:
* The first line of input is the upper-right coordinates of the plateau,
* the lower-left coordinates are assumed to be 0,0.
* The rest of the input is information pertaining to the rovers that have been deployed.
* Each rover has two lines of input.
* The first line gives the rover’s position.
* The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover’s orientation. ( 1 2 N )
* The second line is a series of instructions telling the rover how to explore the plateau.
* Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

* Output:
* The output for each rover should be its final coordinates and heading.

 *  Example Input:
 * 5 5
 * 1 2 N
 * LMLMLMLMM
 * 3 3 E
 * MMRMMRMRRM

 * Expected Output:
 * 1 3 N
 * 5 1
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
