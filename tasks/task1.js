function handlenum (num, evenCallback, oddCallback) {
    if ( num % 2 === 0 ) {
        evenCallback();
    } else {
        oddCallback();
    }
}

function handleEven() {
    console.log("The number is even.");
}

function handleOdd() {
    console.log("The number is odd.");
}

handlenum(5, handleEven, handleOdd);