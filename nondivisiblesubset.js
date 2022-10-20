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
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    let arr = new Array(k).fill(0);
    let answer = 0;

    s.reduce((target, item, index) => {
        arr[item % k] += 1;

        return target;
    }, []);

    for (let i of Array.from(
        { length: (k + 1) / 2 - 1 },
        (value, index) => index + 1 )) {
        answer += Math.max(arr[i], arr[k - i]);
    }

    !(k % 2) && !!arr[k / 2] && (answer += 1);

    arr[0] && (answer += 1);

    return answer;
}   

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}


//https://www.hackerrank.com/challenges/non-divisible-subset/problem