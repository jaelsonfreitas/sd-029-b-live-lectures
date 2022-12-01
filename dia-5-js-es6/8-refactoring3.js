// CONTA QUANTAS VEZES O MAIOR NÚMERO SE REPETE EM UM ARRAY

function highestCount(array) {
let hight = Array[0];
let repeat = 1;
for (let index = 1; index < array.length; index += 1) {
if (array[index] > hight) {
    hight = array[index];
    } else if (array[index] === hight) {
    repeat += 1;
    }
}
return repeat;
} 

console.log(highestCount([10, 10, 11, 10, 9, 10, 1]));