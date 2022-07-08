class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        let cost = 0
        this.storage.forEach(product => {
            cost += product.quantity * product.price;
        });
        return cost;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }

    getProducts() {
        let result = [];
        this.storage.forEach(product => {
            console.log(JSON.stringify(product));
            result.push(JSON.stringify(product));
        });
        return result.join("\n");
    }
}