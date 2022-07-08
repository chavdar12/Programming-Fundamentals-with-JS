function solve(arr) {
    let parsedArr = arr.map(Number), dailyConcrete = [], totalConcrete = 0, costs,
        crews = parsedArr.filter(len => len < 30).length;
    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < parsedArr.length; i++) {
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concreteByAllCrews += 195;
                if (parsedArr[i] === 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}
