const main = (params) => {
    function isPrime(number){
        if (number < 2){
            return false
        }
        for (let i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
    
    const primeNumbers = numbers.map((currentNumber) =>{
        return {
            number: currentNumber,
            prime: isPrime(currentNumber),
        };
    });
    console.log(primeNumbers);
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
main(numbers)