function storeProvision(currents, products) {
    let store = [];

    for (let i = 0; i < currents.length - 1; i += 2) {
        let product = currents[i];
        let quantity = Number(currents[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        store.push(productObject);
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexPr = store.findIndex(x => x.product === product);

        if (indexPr === -1) {
            store.push(productObject);
        } else {
            store[indexPr].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}