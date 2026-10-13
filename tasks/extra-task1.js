let inputLine = "UFHUWBfIFIFIN";
let counter = 0;
for (let i = 0; i < inputLine.length; i++) {
    if (inputLine[i] !== inputLine[i].toUpperCase()) {
        counter++;
    }
}
console.log(!counter);