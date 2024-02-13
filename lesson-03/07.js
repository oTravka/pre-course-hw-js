const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

for (let i = 0; i < numbers.length; i++){
    for (let z = 0; z < numbers[i].length; z++){
    if (numbers[i][z] % 2 !== 0){
        numbers[i].splice(z, 1);
        z--;
            } 
        }
    }

console.log(numbers)