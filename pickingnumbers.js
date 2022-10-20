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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let arr = a.sort((a, b) => (a - b))
    let start = 0
    let max = 0
    let currentArr = []
    
    for(let i=0; i<arr.length; i++) {
        if(Math.abs(arr[start] - arr[i]) <= 1) {
            currentArr.push(arr[i])
            if (currentArr.length > max) {
                max = currentArr.length
            }
        } else {
            start = i
            if (currentArr.length > max) {
                max = currentArr.length
            }
            currentArr = []
            currentArr.push(arr[i])
        }
    }
    
    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/picking-numbers/problem