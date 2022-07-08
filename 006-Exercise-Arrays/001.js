function addSubNum(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if (n % 2 === 0) {
            arr[i] = n + i;
            sum1 += n;
            sum2 += arr[i];
        } else {
            arr[i] = n - i;
            sum1 += n;
            sum2 += arr[i];
        }
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}