function sumNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = Number(arr[i]);
        if (a % 2 === 0) {
            sum += a;
        }
    }
    console.log(sum);
}