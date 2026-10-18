function carPrice(days) {
    let dayPrice = 40;
    let total;
    if (days >= 7) {
        total = days * dayPrice - 50;
    } else if(days >= 3){
        total = days * dayPrice - 20;
    } else {
        total = days * dayPrice;
    }
    return total;
}

console.log(carPrice(5));