function fuel(distance, passengers, price) {
    let wanted = (distance / 100) * 7;
    wanted += passengers * 0.1;
    let total = wanted * price;

    console.log(`Needed money for that trip is ${total}lv.`);
}