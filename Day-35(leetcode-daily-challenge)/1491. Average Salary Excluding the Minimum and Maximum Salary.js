// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer
//  will be accepted.

 

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

let salary = [4000,3000,1000,2000]
// Output: 2500.00000

const func = (salary) => {
      let sum = 0;
      let min = Infinity;
      let max = -Infinity;
      for(let n of salary){
            sum += n;
            min = Math.min(min,n)
            max = Math.max(max,n)
      }
      return (sum - min - max)/(salary.length-2)
}
console.log(func(salary));