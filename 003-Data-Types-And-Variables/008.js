function special(n) {
    for (let i = 1; i <= n; i++) {
        let check = i.toString();
        let sum = 0;

        for (let j = 0; j < check.length; j++) {
            sum += Number(check[j]);
        }

        let isTrue = false;

        if (sum === 5 || sum === 7 || sum === 11) {
            isTrue = true;
        }

        console.log(`${i} -> ${isTrue ? 'True' : 'False'}`);
    }
}