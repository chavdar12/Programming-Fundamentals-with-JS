function gladiatorExp(lost, helmetPr, swordPr, shieldPr, armorPr) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;

    for (let i = 1; i <= lost; i++) {
        if (i % 2 === 0) {
            helmet += 1;
        }
        if (i % 3 === 0) {
            sword += 1;
        }
        if (i % 6 === 0) {
            shield += 1;

            if (shield % 2 === 0) {
                armor += 1;
            }
        }
    }
    let total = helmet * helmetPr + sword * swordPr + shield * shieldPr + armor * armorPr;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}