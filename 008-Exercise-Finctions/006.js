function palindromeNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let check = num.toString();
        let result = '';
        for (let j = check.length - 1; j >= 0; j--) {
            result += check[j];
        }
        if (result === check) {
            console.log(('true'));
        } else {
            console.log('false');
        }
    }
}