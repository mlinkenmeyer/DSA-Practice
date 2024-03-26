// below is too slow

// const fib = (n) => {
//   if (n <= 2) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

// instead use memoization - store some duplicate sub problems to get these results later on
// javascript object. keys will be argument to function. value will be return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
console.log(fib(50));
