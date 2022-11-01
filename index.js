let employee={
    name: "Kasey",
    address: "000 Rock Bottom",
}

//Nondestructive updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,...{[key]:value}}
}

//Destructive updateEmployeeWithKey
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}

//Nondestructive deleteFromEmployeeByKey
let employeeCopy= {}
function deleteFromEmployeeByKey(employee, key){
    employeeCopy= {...employee}
    delete employeeCopy[key]
    return employeeCopy
}

//Destructive deleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name]
    return employee
}

