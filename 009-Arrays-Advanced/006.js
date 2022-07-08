function oddIndexes(arr) {
    let filtered = arr.filter((x, i) => i % 2 === 1);
    let mapped = filtered.map(x => x * 2);
    mapped.reverse();
    console.log(mapped.join(' '));
}