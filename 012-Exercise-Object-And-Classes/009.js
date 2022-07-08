function catalogue(arr) {
    let items = [];
    for (let tokens of arr) {
        let token = tokens.split(' : ');
        let item = token[0];
        let price = Number(token[1]);

        let itemObject = {
            item,
            price,
        }
        items.push(itemObject);
    }

    let sortedItems = items.sort((a, b) => a.item.localeCompare(b.item));

    let labels = [];
    for (let i = 0; i < sortedItems.length; i++) {
        let label = sortedItems[i].item[0];
        if (!labels.includes(label)) {
            labels.push(label);
            console.log(label);
        }
        console.log(`  ${sortedItems[i].item}: ${sortedItems[i].price}`);
    }
}