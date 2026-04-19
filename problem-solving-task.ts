/* ======================================
            2. FizzBuzz
====================================== */
function fizzBuzz(n: number): string[] {
  let output: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i.toString());
    }
  }

  return output;
}
// console.log(fizzBuzz(5));
// // ["1", "2", "Fizz", "4", "Buzz"]

// console.log(fizzBuzz(1));
// // ["1"]

/* ======================================
 3. Find the Largest Number in an Array
====================================== */
function findLargestNum(nums: number[]): number {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}
// console.log(findLargestNum([1, 5, 3, 9, 2])); // 9
// console.log(findLargestNum([-10, -5, -1])); // -1

/* ======================================
           4. Check for Palindrome
====================================== */
function isPalindrome(s: string): boolean {
  let convertLowerCase = s.toLowerCase();
  let reversed = "";

  for (let i = convertLowerCase.length - 1; i >= 0; i--) {
    reversed += convertLowerCase[i];
  }

  return convertLowerCase === reversed;
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

/* ======================================
        7. Factorial Calculation
====================================== */
function factorialCalculation(n: number): number {
  let output = 1;

  for (let i = 1; i <= n; i++) {
    output *= i;
  }

  return output;
}
// console.log(factorialCalculation(5)); // 120
// console.log(factorialCalculation(0)); // 1

/* ======================================
           8. Even or Odd List
====================================== */
function evenNumbers(nums: number[]): number[] {
  let output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      output.push(nums[i]);
    }
  }

  return output;
}
// console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(evenNumbers([1, 3, 5])); // []

/* ======================================
       9. Fibonacci Sequence
====================================== */
function fibonacciSequence(n: number): number[] {
  if (n === 1) return [0];

  let output = [0, 1];

  for (let i = 2; i < n; i++) {
    output.push(output[i - 1] + output[1 - 2]);
  }

  return output;
}
// console.log(fibonacciSequence(5)); // [0, 1, 1, 2, 3]
// console.log(fibonacciSequence(1)); // [0]

/* ======================================
     10. Find the Minimum in an Array
====================================== */
function findMinimum(nums: number[]): number {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}
// console.log(findMinimum([5, 2, 8, 1])); // 1
// console.log(findMinimum([3, 3, 3])); // 3

/* ======================================
            12. Check Prime Number
====================================== */
function isPrimeNumber(n: number): boolean {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
// console.log(isPrimeNumber(7)); // true
// console.log(isPrimeNumber(10)); // false
// console.log(isPrimeNumber(1)); // false

/* ======================================
    14. Convert Celsius to Fahrenheit
====================================== */
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}
// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(25)); // 77

/* ======================================
  15. Count Occurrences of a Character
====================================== */
function countOccurrencesCharacter(s: string, c: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
}
// console.log(countOccurrencesCharacter("hello", "l")); // 2
// console.log(countOccurrencesCharacter("abc", "z")); // 0
