function employees(list) {
    for (let employee of list) {
        let employeeData = {
            name: employee,
            number: employee.length
        };

        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.number}`);
    }
}