function buildWall(arr) {
    let days = 0, crew = arr.length, total = [];
    while (crew !== 0) {
        for (let i = 0; i < arr.length; i++) {
            let current = Number(arr[i]);
            if (current < 30) {
                let position = arr.indexOf(current);
                let item = current + 1;
                arr.splice(position, 1, item);
                days += 1;
            }
        }

        total.push(days * 195);
        days = 0;

        if (arr.every(x => x === 30)) {
            console.log(total.join(', '));
            let sum = 0;
            for (let el of total) {
                sum += el;
            }
            console.log(`${sum * 1900} pesos`);
            break;
        }
    }
}