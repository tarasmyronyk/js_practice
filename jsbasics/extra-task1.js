let array = [1, 10, 6, 3, 5, 8, 2, 4, 7, 9];
let i = 0;
let min = 0;
let max = 0;
let sum = 0;
while (i < array.length) {
    if (array[i] < array[min]) {
        min = i;
    }
    if (array[i] > array[max]) {
        max = i;
    }
    sum += array[i];
    i++;
}
console.log(sum - array[min] - array[max]);
