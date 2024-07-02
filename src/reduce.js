const arr = [10, 1, 1, 1, 1, 1, 5, 7, 8, 9];
arr.sort((a, b) => a - b);
arr;
console.log(arr);
let rd = arr.reduce((a, c) => {
    return a + c;
}, 0); 
console.log(rd);