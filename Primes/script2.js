let num1 = 7;
let num2 = 8;
let num3 = 20;
let primesArr = [];

/**
 * @param {*} num 
 * @return {boolean}
 */
function isPrime(num) {

  for (let i = 2; i < num; i++) {

    // if num is divisible by 2, num in not prime
    if (num % i === 0) {
      return false;
    }
  }
  
  // if prime push into primesArr
  primesArr.push(num);
  return true;
}

for (let j = 2; j < num3; j++) {
  
  console.log('out', isPrime(j));
}
console.log(primesArr);
