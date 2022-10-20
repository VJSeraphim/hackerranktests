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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const arrAsc = []
    for ( let i=0; i<arr.length; i++) arrAsc.push(arr[i])
    arrAsc.sort((a, b) => (a - b))
    
    const arrDesc = []
    for ( let i=0; i<arr.length; i++) arrDesc.push(arr[i])
    arrDesc.sort((a, b) => (b - a))
    
    let arrAscSum = 0
    let arrDescSum = 0
    
    for (let i=0; i<arr.length - 1; i++) {
        arrAscSum += arrAsc[i]
        arrDescSum += arrDesc[i]
    }
    
    console.log(arrAscSum + " " + arrDescSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}


//https://www.hackerrank.com/challenges/mini-max-sum/problem