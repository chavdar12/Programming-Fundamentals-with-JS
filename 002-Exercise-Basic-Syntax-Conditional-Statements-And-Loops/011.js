function bitcoin(arr) {
    let bitcoin = 11949.16;
    let gold = 67.51;

    let countDay = 1;
    let budget = 0;
    let coins = 0;

    let day = arr.shift();
    let buy = false;
    let buyCoin = 0;

    while (day !== undefined) {
        let now = 0;

        if (countDay % 3 === 0) {
            now = 0.7 * day;
        } else {
            now = day;
        }

        let sum = (now * gold);
        budget += sum;

        while (budget > bitcoin) {
            budget = (budget - bitcoin);
            coins++;
            buy = true;

            if (coins === 1) {
                buyCoin = countDay;
            }
        }
        day = arr.shift();
        countDay++;
    }

    console.log(`Bought bitcoins: ${coins}`);

    if (buy === true) {
        console.log(`Day of the first purchased bitcoin: ${buyCoin}`);
    }

    console.log(`Left money: ${budget.toFixed(2)} lv.`);
}