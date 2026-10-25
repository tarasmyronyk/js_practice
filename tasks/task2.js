const startArray = [1, 2, 3, 4, 5];

const resultArray = startArray.map((num, index) => {
    return num * index;
});

console.log(resultArray);