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

    return  x.reduce<number>((numA,numT) => numA + +numT,0);
     
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

export function validatePIN(pin:string):boolean {
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

function abbrevName(name:string):string {
    
    return  name.split(' ').map(( x) => x.slice(0,1)).join(' ').toUpperCase()
}