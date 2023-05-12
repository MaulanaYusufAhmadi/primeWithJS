/*
    Create function with parameter that return array of prime number
    For how much number depends on the input

    For example, input 11
    Expected result [2, 3, 5, 7, 11]
*/


const result = (n) => {
  // code here
  let primes = [];

  for( let i=2; i<=n; i++) {
    let isPrime = true;

    for( let j=2; j<i; j++ ) {
      if( i % j === 0 ) {
        isPrime = false;
        break;
      }
    }

    if( isPrime ) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(result(11));