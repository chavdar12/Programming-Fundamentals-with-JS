function storage(arr) {
    let map = new Map();

    for (let token of arr) {
        let product = token.split(' ')[0];
        let quantity = Number(token.split(' ')[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currentQ = map.get(product);
            let newQ = currentQ + quantity;
            map.set(product, newQ)
        }
    }

    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}