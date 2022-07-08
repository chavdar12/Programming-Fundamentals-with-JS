function inventory(list) {
    let heroes = [];
    for (let tokens of list) {
        let token = tokens.split(' / ');
        let hero = token[0];
        let level = Number(token[1]);
        let items = token[2].split(', ');

        let heroObject = {
            hero,
            level,
            items,
        }
        heroes.push(heroObject);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }
}