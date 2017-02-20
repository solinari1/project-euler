//Multiples of 3 and 5
//Problem 1
//Find the sum of all the multiples of 3 or 5 below 1000.

var sumMultiples = 0

for (i = 1; i < 1000; i ++) {
  if (i % 3 === 0) {
  sumMultiples += i;
} else if (i % 5 === 0) {
  sumMultiples += i;
} else {
  null;
}
}
console.log(sumMultiples);