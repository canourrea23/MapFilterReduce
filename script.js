//1. Map - Capitalize each first letter of an array of words.

const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

function capitalize(words) {
    // Your code here
    return words[0].toUpperCase() + words.slice(1, words.length);
}

const newArr = arr.map(capitalize);
console.log(newArr);

// 2. Filter - Filter out all numbers that are odd.
const arr2 = [1, 2, 3, 4, 5, 6];
function isEven(integers) {
    // Your code here
    return (integers%2==0)
}
const newArr2 = arr2.filter(isEven);
console.log(newArr2);
// 3. Reduce - Write a function that takes in an array of numbers and returns the sum of the numbers.
const arr3 = [7, 9, 12, 2];

function add(total, num) {
return total + num;
}
const newArr3 = arr3.reduce(add);
console.log(newArr3)
