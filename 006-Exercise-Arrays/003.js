function mergeArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let sum1 = 0;
        let sum2 = ''
        if (i % 2 === 0) {
            sum1 = Number(arr1[i]) + Number(arr2[i]);
            newArr.push(sum1);
        } else {
            sum2 += arr1[i] + arr2[i];
            newArr.push(sum2);
        }
    }
    console.log(newArr.join(' - '));
}