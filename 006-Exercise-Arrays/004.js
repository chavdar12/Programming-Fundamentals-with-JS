function arrRotation(arr, n) {
    let num = n;
    while (num > 0) {
        let change = arr.shift();
        arr.push(change)
        num--;
    }
    console.log(arr.join(' '));
}