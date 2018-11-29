function fib(n) {
  if(n <= 2) return n-1;
  // if (n==1)
  //if(n==0)
  return fib (n-1) + fib (n-2)

}
console.log(fib(1)) //0
console.log(fib(2)) //1
console.log(fib(7)) //8