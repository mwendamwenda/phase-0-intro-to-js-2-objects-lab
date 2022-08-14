// Write your solution in this file!
const employee = {name :"Sam"}
            console.log(employee)
            employee.name = "Sam"
function updateEmployeeWithKeyAndValue() {
    const employee = {name: "Sam"};
    employee.streetAddress = "11 Broadway";
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway";
    return employee;

}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee, key}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(newEmployee,key) {
    newEmployee.name = "Sam";
    delete newEmployee.name;
    return newEmployee
}