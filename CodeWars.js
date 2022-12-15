/* 8 kyu Cat years, Dog years

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/
var humanYearsCatYearsDogYears = function(humanYears) {
    let years = []
    if(humanYears == 1){
      years[0] = 1
      years[1] = 15
      years[2] = 15
    }else if (humanYears == 2){
      years[0] = 2
      years[1] = 24
      years[2] = 24
    }else{
      years[0] = humanYears
      years[1] = 24 + ((humanYears - 2) * 4)
      years[2] = 24 + ((humanYears - 2) * 5)
    }
    
    return years;
  }
  
  


/* 7 Kyu  -  Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num) {
    return  Number(num.toString().split('').map((x) => +x * +x).join(''))
}

console.log(squareDigits(122))



//  8 kyu  Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.split(" ").join('');
};


// 8 kyu  Count of positives / sum of negatives

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].  */

function countPositivesSumNegatives(num) {
    if (num === null || num.length == 0) {
        return []
    }

    let positivos = num.filter(positivo => {
        if (positivo > 0) {
            return positivo;
        }
    })
    let negativos = num.filter(negativo => {
        if (negativo < 0) {
            return negativo;
        }
    })
    let novoNegativo = negativos.reduce(function (acumlador, soma) {
        return acumlador + soma;
    }, 0)

    let novo = [positivos.length, novoNegativo]

    return novo;
}


// 7 kyu Regex validate PIN code

/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false 

*/

function validatePIN(pin) {
    const regex = /\D/

    if ((!regex.test(pin)) && (pin.length == 6 || pin.length == 4)) {
        return true
    } else {
        return false
    }
}


// 8 kyu Find the smallest integer in the array

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.max(...args)
    }
}



/* 7 kyu Shortest Word


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
    return Math.min(...s.split(' ').map(x => x.length))

}


