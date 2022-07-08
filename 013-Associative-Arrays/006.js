function wordOccurrences(arr) {
    let map = new Map();
    for (let token of arr) {

        if (!map.has(token)) {
            map.set(token, 1);
        } else {
            let currentC = map.get(token);
            let newCount = currentC + 1;
            map.set(token, newCount);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let token of sorted) {
        console.log(`${token[0]} -> ${token[1]} times`);
    }
}