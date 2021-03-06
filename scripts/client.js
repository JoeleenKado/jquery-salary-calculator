console.log('JS is CONNECTED');

$(document).ready(readyNow);

function readyNow() {//ENTER readyNow
    console.log('JQ is READY');
    /*A 'Submit' button, should collect the form information,
   and store the information to calculate monthly costs,
   append information to the DOM and */
    $('#submitButton').on('click', addEmployee);
    /*Create a delete button that removes an employee from the DOM. 
    For Base mode, it does **not** need to remove that Employee's salary from the reported total.*/
    $('#employeeTable').on('click', '.employeeOnDOM', deleteEmployeeFunction);
};//EXIT readyNow  

let totalCompanyCost = 0;
//let employeeRoladex = []; 

function addEmployee() {//ENTER addEmployee    
    //use the event passed in to stop the default action
    //of page refresh
    event.preventDefault(event);

    let employeeObject = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        iDNumber: $('#iDNumIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    totalCompanyCost += Number(employeeObject.annualSalary);
    //employeeRoladex.push(employeeObject)
    console.log(employeeObject);
    //console.log(employeeRoladex);
    console.log(`The 'totalCompanyCost' is $${totalCompanyCost} 
    And, The 'MonthlyCompanyCost' is $${totalCompanyCost / 12}`);

    //Append employee info to the DOM 
    let firstNameToDOM = `<th class="">${employeeObject.firstName}</th>`;
    let lastNameToDOM = `<th class="">${employeeObject.lastName}</th>`;
    let iDNumToDOM = `<th class="">${employeeObject.iDNumber}</th>`;
    let jobTitleToDOM = `<th class="">${employeeObject.jobTitle}</th>`;
    let annualSalaryTODOM = `<th class="">${employeeObject.annualSalary}</th>`;
    let deleteButton = `<th><button>DELETE</button></th>`;
    $('#employeeTable').append(`<tr class="employeeOnDOM">${firstNameToDOM}, ${lastNameToDOM}, ${iDNumToDOM}, ${jobTitleToDOM}, ${annualSalaryTODOM}, ${deleteButton}</tr>`);

    //If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
    if (totalCompanyCost / 12 > 20000) {
        $('#monthlyCompanyCostToDOM').addClass('red');
    };

    appendMonthlyTODOM();
};//EXIT addEmployee 

function appendMonthlyTODOM() {//ENTER appendMonthlyTODOM
    //clear DOM
    $('#monthlyCompanyCostToDOM').empty();
    //append monthly cost to DOM.
    $('#monthlyCompanyCostToDOM').append(`Monthly Company Cost: $${Number.parseFloat(totalCompanyCost / 12).toFixed(2)}`);
    //clear the input fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#iDNumIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
};//EXIT appendMonthlyTODOM

function deleteEmployeeFunction() {
    console.log('*You have clicked DELETE.');
    this.remove();
}