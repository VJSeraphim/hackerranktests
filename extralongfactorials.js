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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    let result = 1n;
    n = BigInt(n)
    for(let i=1n;i<=n;i++){
        result *=i;
    }
    
    console.log(result.toString(10));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}


//https://www.hackerrank.com/challenges/extra-long-factorials/problem