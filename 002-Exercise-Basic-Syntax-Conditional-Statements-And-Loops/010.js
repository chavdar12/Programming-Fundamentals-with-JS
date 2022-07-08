function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let count = 0;
    let height = 0;

    while (base > 0) {
        count++;
        height += increment;
        let total = base * base * increment;
        let inside = (base - 2) * (base - 2) * increment;
        let outside = total - inside;

        if (base < 3) {
            gold += total;
        } else {
            stone += inside;
            if (count % 5 !== 0) {
                marble += outside;
            } else {
                lapis += outside;
            }
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}