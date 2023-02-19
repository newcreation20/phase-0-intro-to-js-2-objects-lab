
function updateEmployeeWithKeyAndValue(employee, key, value){
//    var updatedEmployee = JSON.parse(JSON.stringify(employee));
var updatedEmployee = {...employee}
   updatedEmployee[key] = value 
   console.log('employee', employee)
   console.log('updatedEmployee', updatedEmployee)
   return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    var updatedEmployee = employee
    updatedEmployee[key] = value 
    return updatedEmployee
}

function deleteFromEmployeeByKey(employee, key){
    var updatedEmployee = {...employee}
    delete updatedEmployee[key];
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    var updatedEmployee = employee
    delete updatedEmployee[key];
    return updatedEmployee
}
















// beforeEach(function () {
//     for (const key in employee) {
//       delete employee[key];
//     }

//     employee.name = 'Sam';
//   });
