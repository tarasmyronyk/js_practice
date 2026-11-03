function timer(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

timer("Hello after 2 seconds", 2000);