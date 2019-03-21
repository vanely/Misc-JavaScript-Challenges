let end = 105000;
let primes = [];
let counter = 0;

function isPrime(num) {
  
  //iterating from 2 to num(function param)
  for (let i = 2; i < num; i++) {
    
    //if divisible by 0, num is not prime
    if (num % i === 0) {
    
      return false;
    }
  }

  //append prime into primes array
  primes.push(num);
  counter = counter + 1;
  
  if(counter === 10001) {
    
    console.log(num);
  }
  
  return num > 1;
}


for(let j = 2; j < end; j++) {
  
  isPrime(j);
}
console.log(primes.length);

console.log(primes);
