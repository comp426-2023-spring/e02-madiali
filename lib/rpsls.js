const shotEncoding = {'rock': 0b00001, 'paper': 0b00010, 'scissors': 0b00100, 'lizard': 0b01000,
                        'spock': 0b10000}
const winDecoding = {0b00101: 'rock', 0b01001: 'rock', 0b00011: 'paper', 0b10010: 'paper',
                        0b00110: 'scissors', 0b01100: 'scissors', 0b11000: 'lizard', 0b01010: 'lizard',
                        0b10100: 'spock', 0b10001: 'spock'}

export function rps(playerShot) {
    const validShots = ['rock', 'paper', 'scissors']

    // Convert playerShot to lowercase
    if (playerShot !== undefined) {
        playerShot = playerShot.toLowerCase()
    }
    // Generate opponentShot
    let opponentShot = validShots[Math.floor(Math.random() * 3)]

    // Case 1: undefined playerShot
    if (playerShot === undefined) {
        return {'player': opponentShot}
    } 
    // Case 2: invalid playerShot
    else if (!validShots.includes(playerShot)) {
        console.error(playerShot + ' is out of range.')
        throw new Error(playerShot + ' is out of range.')
    } 
    // Case 3: valid playerShot
    else {
        let winState = shotEncoding[playerShot] | shotEncoding[opponentShot]
        let result = 'lose'
        if (playerShot === opponentShot) {
            result = 'tie'
        }
        else if (playerShot === winDecoding[winState]) {
            result = 'win'
        }
        return {'player': playerShot, 'opponent': opponentShot, 'result': result}
    }
}

export function rpsls(playerShot) {
    const validShots = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    // Convert playerShot to lowercase
    if (playerShot !== undefined) {
        playerShot = playerShot.toLowerCase()
    }
    // Generate opponentShot
    let opponentShot = validShots[Math.floor(Math.random() * 5)]

    // Case 1: undefined playerShot
    if (playerShot === undefined) {
        return {'player': opponentShot}
    } 
    // Case 2: invalid playerShot
    else if (!validShots.includes(playerShot)) {
        console.error(playerShot + ' is out of range.')
        throw new Error(playerShot + ' is out of range.')
    } 
    // Case 3: valid playerShot
    else {
        let winState = shotEncoding[playerShot] | shotEncoding[opponentShot]
        let result = 'lose'
        if (playerShot === opponentShot) {
            result = 'tie'
        }
        else if (playerShot === winDecoding[winState]) {
            result = 'win'
        }
        return {'player': playerShot, 'opponent': opponentShot, 'result': result}
    }
}