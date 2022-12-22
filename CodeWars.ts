// 7 Kyu Grasshopper - Summation

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output): */

export function summation(num: number) {
    let total = 0
    if (num === 0) {
        total = 1
        return total
    }
    if (num > 0) {

        for (let i = 0; i <= num; i++) {
            total += i
        }
        return total

    }
}

/* 7 kyu Complementary DNA
    Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
*/
export class Kata {
    static dnaStrand(dna: string) {
        let nome = ''
        for (let i = 0; i <= dna.length; i++) {
            if (dna[i] === 'A') {
                nome += 'T'
            }
            if (dna[i] === 'T') {
                nome += 'A'
            }
            if (dna[i] === 'C') {
                nome += 'G'
            } if (dna[i] === 'G') {
                nome += 'C'
            }
            
        }
        return nome
    }
}
 


//  8 kyu  Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

export function noSpace(x: string): string {

    return x.split(" ").join('')
}



// 8 kyu  Count of positives / sum of negatives

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].  */


export function countPositivesSumNegatives(input: any) {
    if (input === null || input.length < 1) return []
    let count = [...input].filter(a => a > 0).length;
    let sum = [...input].filter(a => a < 0).reduce((a, b) => a + b, 0);
    return [count, sum]
}





//8 kyu Convert boolean values to strings 'Yes' or 'No'.


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


export function boolToWord(bol: boolean): string {
    return bol ? "Yes" : 'No'
}


// 8 kyu Sum Mixed Array

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

export function sumMix(x: (string | number)[]): number {

    return x.reduce<number>((numA, numT) => numA + +numT, 0);

}

//7 kyu Regex validate PIN code


/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false 
*/

export function validatePIN(pin: string): boolean {
    const regex = /\D/

    if ((!regex.test(pin)) && (pin.length == 6 || pin.length == 4)) {
        return true
    } else {
        return false
    }

}



/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name: string): string {

    return name.split(' ').map((x) => x.slice(0, 1)).join(' ').toUpperCase()
}


/* 7 kyu Shortest Word


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

export function findShort(s: string): number {
    return Math.min(...s.split(' ').map(x => x.length))

}




/* 7 Kyu Breaking chocolate problem

Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/


function breakChocolate(n: number, m: number): number {
    return n < 1 || m < 1 ? 0 : (n * m) - 1
}


function squareDigits(num: number) {
    return +(num.toString().split('').map((x) => +x * +x).join(''))
}


/* 8 Kyu Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

export function quarterOf(month: number): number {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else {
        return 4
    }
}