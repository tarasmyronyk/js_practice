const number = 7;
let i = 0;

for (i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
i = 1;
console.log('\n');
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}