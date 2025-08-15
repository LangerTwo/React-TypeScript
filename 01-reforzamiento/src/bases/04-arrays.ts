const myArray: number[] = [1, 2, 3, 4, 5, 6];

// myArray.push(7);
// myArray.push(8);

const myArray2 = [ ...myArray ]
myArray2.push(9);

console.log(myArray, myArray2);

// for (const myNumber of myArray) {
//     console.log(myNumber + 10);
// };