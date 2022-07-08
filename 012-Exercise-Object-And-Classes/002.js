function towns(list) {
    for (let objects of list) {
        let tokens = objects.split(' | ');
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);

        let townData = {
            town,
            latitude,
            longitude,
        }

        console.log(townData);
    }
}