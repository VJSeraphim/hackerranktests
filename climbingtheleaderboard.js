'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    let rank = []
    for ( let i=0; i<ranked.length; i++) {
        if (rank.length === 0) rank.push(ranked[i])
        else {
            if (rank[rank.length - 1] === ranked[i]) continue
            else rank.push(ranked[i])
        }
    }
    
    let result = []
    let lowest = rank.length
    for (let j=0; j<player.length; j++) {
        while(player[j] >= rank[lowest - 1] && lowest > 0) {
            rank.pop
            lowest--
        }
        result.push(lowest + 1)
    }
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem