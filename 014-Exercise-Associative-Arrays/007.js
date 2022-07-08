function companyUsers(arr) {
    let employees = {};

    for (let token of arr) {
        let [company, idNUm] = token.split(' -> ');

        if (!Object.keys(employees).includes(company)) {
            employees[company] = {};
        }

        if (!Object.keys(employees[company]).includes(idNUm)) {
            employees[company][idNUm] = idNUm;
        }
    }

    let sorted = Object.entries(employees).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, idNum] of sorted) {
        console.log(`${company}`);
        let stringsId = Object.entries(idNum).map(x => `-- ${x[0]}`);
        console.log(stringsId.join('\n'));
    }
}