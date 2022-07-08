function dungeonDark(arr) {
    let restroom = 0;
    let health = 100;
    let coins = 0;

    let dungeon = arr[0].split('|');

    for (let room of dungeon) {
        let tokens = room.split(' ');
        let encountered = tokens[0];
        let value = Number(tokens[1]);

        if (encountered === 'potion') {
            if (health + value > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`);
                health += value;
            }
            console.log(`Current health: ${health} hp.`);
            restroom++;
        } else if (encountered === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
            restroom++;
        } else {
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${encountered}.`);
                restroom++;
                console.log(`Best room: ${restroom}`);
                break;
            } else {
                console.log(`You slayed ${encountered}.`);
                restroom++;
            }
        }
    }

    if (restroom === dungeon.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}