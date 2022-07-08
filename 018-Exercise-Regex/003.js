function softUniBar(input) {
    let pattern = '/%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/g', total = 0;
    
    while (input[0] !== 'end of shift') {
        let line = input.shift();

        let match = pattern.exec(line);

        if (match != null) {
            let [_, name, product, count, price] = match;
            count = Number(count);
            price = Number(price);

            total += count * price;

            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`)
        }
        match = pattern.exec(line);
    }
    console.log('Total income: ' + total.toFixed(2));
}