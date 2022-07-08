function oddOccurrences(string) {
    let occurrences = {};
    let listStrings = string.split(' ');

    for (let token of listStrings) {
        let stringLower = token.toLowerCase();

        if (!Object.keys(occurrences).includes(stringLower)) {
            occurrences[stringLower] = 0;
        }

        occurrences[stringLower] += 1;
    }

    let result = '';

    for (let [key, value] of Object.entries(occurrences)) {
        if (value % 2 !== 0) {
            result += `${key} `;
        }
    }

    console.log(result);
}
