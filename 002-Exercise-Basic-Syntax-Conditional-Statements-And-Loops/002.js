function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let num1 = num.toFixed(precision);
    num1 = parseFloat(num1);
    console.log(num1);
}