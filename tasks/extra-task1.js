function stringAdd(a, b) {
    if (a.length < b.length) {
        return (a + b + a);
    } else {
        return (b + a + b);
    }
}
console.log(stringAdd("Hello", "Tom")); 