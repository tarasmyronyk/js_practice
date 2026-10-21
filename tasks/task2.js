function recursiveFunction(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    recursiveFunction(n - 1);
}

recursiveFunction(5);