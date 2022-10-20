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
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    const possibleSubject = (str1, str2) => {
        let count = 0
        for ( let i=0; i<str1.length; i++) {
            if (str1[i] == 1) count++
            else if (str2[i] == 1) count++
        }
        return count
    }
    
    let max = 0
    let team = 0
    
    for (let i=0; i<topic.length - 1 ; i++) {
        for ( let j=i+1; j<=topic.length - 1; j++) {
            let countOnes = possibleSubject(topic[i], topic[j])
            
            if (countOnes > max) {
                team = 0
                max = countOnes
            } 
            
            if (countOnes == max) {
                team++
            }
        }
    }
    
    return [max, team]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

//https://www.hackerrank.com/challenges/acm-icpc-team/problem
