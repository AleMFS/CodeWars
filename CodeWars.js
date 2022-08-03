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