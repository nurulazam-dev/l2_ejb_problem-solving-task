# Level_2 EJB problem solving task

## The Problems

### => 1. Reverse a String

**Task:** Write a function that takes a string and returns it reversed.

- **Input:** string s
- **Output:** string
- **Constraints:** s.length <= 1000.
- **Edge Case:** Single character strings or empty strings.
- **Hint:** Look into built-in string slicing or a simple loop.

```ts
function reverseString(s: string): string {
  let output = "";
  for (let i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }
  return output;
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("A")); // "A"
console.log(reverseString("")); // ""
```

---

### => 2. FizzBuzz

**Task:** Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

- **Input:** integer n
- **Output:** Printed lines or a list of strings.
- **Constraints:** 1 <= n <= 100.
- **Edge Case:** n = 1.
- **Hint:** Use the modulo operator % to check for remainders.

```ts
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
console.log(fizzBuzz(5));
// ["1", "2", "Fizz", "4", "Buzz"]

console.log(fizzBuzz(1));
// ["1"]
```

---

### => 3. Find the Largest Number in an Array

**Task:** Given an array of integers, return the largest value.

- **Input:** int[] nums
- **Output:** integer
- **Constraints:** Array will have at least one element.
- **Edge Case:** Array with all negative numbers.
- **Hint:** Initialize a variable with the first element of the array.

```ts
function findLargestNum(nums: number[]): number {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}
console.log(findLargestNum([1, 5, 3, 9, 2])); // 9
console.log(findLargestNum([-10, -5, -1])); // -1
```

---

### => 4. Check for Palindrome

**Task:** Determine if a word reads the same forward and backward.

- **Input:** string s
- **Output:** boolean
- **Constraints:** Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
- **Edge Case:** "racecar" (true) vs "hello" (false).
- **Hint:** Compare the string with its reverse.

```ts
function isPalindrome(s: string): boolean {
  let convertLowerCase = s.toLowerCase();
  let reversed = "";

  for (let i = convertLowerCase.length - 1; i >= 0; i--) {
    reversed += convertLowerCase[i];
  }

  return convertLowerCase === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

---

### => 5. Sum of Array Elements

**Task:** Calculate the total sum of all numbers in an array.

- **Input:** int[] nums
- **Output:** integer
- **Constraints:** nums.length <= 500.
- **Edge Case:** Empty array (should return 0).
- **Hint:** Use an accumulator variable inside a loop.

```ts
function sumArray(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([])); // 0
```

---

### => 6. Count Vowels

**Task:** Count how many vowels (a, e, i, o, u) are in a given string.

- **Input:** string s
- **Output:** integer
- **Constraints:** s contains English letters and spaces.
- **Edge Case:** String with no vowels.
- **Hint:** Iterate through the string and check if each character is in a "vowel" set.

```ts
function countVowels(s: string): number {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("xyz")); // 0
```

---

### => 7. Factorial Calculation

**Task:** Find the factorial of a non-negative integer n.

- **Input:** integer n
- **Output:** integer
- **Constraints:** 0 <= n <= 12.
- **Edge Case:** n = 0 (Factorial of 0 is 1).
- **Hint:** Use a for-loop or recursion.

```ts
function factorialCalculation(n: number): number {
  let output = 1;

  for (let i = 1; i <= n; i++) {
    output *= i;
  }

  return output;
}
console.log(factorialCalculation(5)); // 120
console.log(factorialCalculation(0)); // 1
```

---

### => 8. Even or Odd List

**Task:** Given an array of numbers, return a new array containing only the even numbers.

- **Input:** int[] nums
- **Output:** int[]
- **Constraints:** nums.length <= 100.
- **Edge Case:** Array with no even numbers.
- **Hint:** Use the modulo operator inside a filter condition.

```ts
function evenNumbers(nums: number[]): number[] {
  let output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      output.push(nums[i]);
    }
  }

  return output;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(evenNumbers([1, 3, 5])); // []
```

---

### => 9. Fibonacci Sequence

**Task:** Generate the first n numbers of the Fibonacci sequence.

- **Input:** integer n
- **Output:** int[]
- **Constraints:** n >= 1.
- **Edge Case:** n = 1.
- **Hint:** Start with [0, 1] and add the last two elements to get the next.

```ts
function fibonacciSequence(n: number): number[] {
  if (n === 1) return [0];

  let output = [0, 1];

  for (let i = 2; i < n; i++) {
    output.push(output[i - 1] + output[1 - 2]);
  }

  return output;
}
console.log(fibonacciSequence(5)); // [0, 1, 1, 2, 3]
console.log(fibonacciSequence(1)); // [0]
```

---

### => 10. Find the Minimum in an Array

**Task:** Given an array of integers, return the smallest value.

- **Input:** int[] nums
- **Output:** integer
- **Constraints:** Array will not be empty.
- **Edge Case:** Multiple elements with the same minimum value.
- **Hint:** Similar logic to finding the maximum.

```ts
function findMinimum(nums: number[]): number {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}
console.log(findMinimum([5, 2, 8, 1])); // 1
console.log(findMinimum([3, 3, 3])); // 3
```

---

### => 11. Multiplication Table

**Task:** Generate a multiplication table for a number n up to 10.

- **Input:** integer n
- **Output:** List of strings (e.g., "5 x 1 = 5").
- **Constraints:** 1 <= n <= 100.
- **Edge Case:** n = 1.
- **Hint:** Use a simple loop from 1 to 10.

```ts
function multiplicationTable(n: number): string[] {
  let result: string[] = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }

  return result;
}
console.log(multiplicationTable(5));
/*
[
 "5 x 1 = 5",
 "5 x 2 = 10",
 ...
 "5 x 10 = 50"
]
*/
```

---

### => 12. Check Prime Number

**Task:** Determine if a number n is prime (only divisible by 1 and itself).

- **Input:** integer n
- **Output:** boolean
- **Constraints:** 1 <= n <= 1000.
- **Edge Case:** n = 1 (not prime), n = 2 (prime).
- **Hint:** Check divisibility from 2 up to the square root of n.

```ts
function isPrimeNumber(n: number): boolean {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrimeNumber(7)); // true
console.log(isPrimeNumber(10)); // false
console.log(isPrimeNumber(1)); // false
```

---

### => 13. Remove Duplicates from a List

**Task:** Given an array, return a new array with duplicate values removed.

- **Input:** int[] nums
- **Output:** int[]
- **Constraints:** Order of elements should be preserved.
- **Edge Case:** Array where all elements are the same.
- **Hint:** Use a "Set" data structure or check if an element is already in the result list.

```ts
function removeDuplicates(nums: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));
// [1, 2, 3]
```

---

### => 14. Convert Celsius to Fahrenheit

**Task:** Convert a temperature from Celsius to Fahrenheit.

- **Input:** float celsius
- **Output:** float
- **Constraints:** Formula: (C \* 9/5) + 32.
- **Edge Case:** Negative temperatures.
- **Hint:** Basic arithmetic operation.

```ts
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77
```

---

### => 15. Count Occurrences of a Character

**Task:** Given a string and a character, find how many times that character appears in the string.

- **Input:** string s, char c
- **Output:** integer
- **Constraints:** Case-sensitive.
- **Edge Case:** Character not present in the string.
- **Hint:** Use a counter variable and loop through the string.

```ts
function countOccurrencesCharacter(s: string, c: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
}
console.log(countOccurrencesCharacter("hello", "l")); // 2
console.log(countOccurrencesCharacter("abc", "z")); // 0
```

---
