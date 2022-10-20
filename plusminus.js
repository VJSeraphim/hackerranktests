'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const SIZE = arr.length
    let plusNum = 0
    let minusNum = 0
    let zeroNum = 0
    
    for (let i=0; i<SIZE; i++) {
        if (arr[i] > 0) plusNum++
        if (arr[i] < 0) minusNum++
        if (arr[i] === 0 ) zeroNum++
    }
    
    return console.log(plusNum/SIZE.toFixed(6) + '\n' + minusNum/SIZE.toFixed(6) + '\n' + zeroNum/SIZE.toFixed(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


//https://www.hackerrank.com/challenges/plus-minus/problem