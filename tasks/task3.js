function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both numerator and denominator must be numbers.");
    }
    return numerator / denominator;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Calculation is done.");
}

try {
    let result = divide(10, "abc");
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Calculation is done.");
}

try {
    let result = divide(10, 5);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Calculation is done.");
}