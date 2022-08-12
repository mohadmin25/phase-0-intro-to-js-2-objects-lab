let  employee = {
    name : '',
    streetAddress : '',
}
function updateEmployeeWithKeyAndValue(employee, name, value) {
    let newEmployee = {...employee}
    newEmployee[name] = value;
    return newEmployee;
}function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}