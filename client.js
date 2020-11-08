console.log('JS is CONNECTED');

$(document).ready(readyNow);

function readyNow() {//ENTER readyNow
    console.log('JQ is READY');
    /*A 'Submit' button, should collect the form information,
    and store the information to calculate monthly costs,
    append information to the DOM and */
    $('#submitButton').on('click', addEmployee);
};//EXIT readyNow  

let totalCompanyCost= 0;


let employeeRoladex = []; 
//let monthlyCompanyCost = totalCompanyCost / 12;

function addEmployee() {//ENTER addEmployee
   // let monthlyCompanyCost = totalCompanyCost / 12;
    
    //use the event passed in to stop the default action
    //of page refresh
    event.preventDefault(event);
    //clear the input fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#iDNumIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

    let employeeObject = {
        firstName : $('#firstNameIn').val(),
        lastName : $('#lastNameIn').val(),
        iDNumber : $('#iDNumIn').val(),
        jobtitle : $('#jobTitleIn').val(),
        annualSalary : $('#annualSalaryIn').val()
    }
    totalCompanyCost += Number(employeeObject.annualSalary);
    employeeRoladex.push(employeeObject)
    console.log(employeeObject);
    console.log(employeeRoladex);
    console.log(`The 'totalCompanyCost' is $${totalCompanyCost} 
    And, The 'MonthlyCompanyCost' is $${totalCompanyCost / 12}`);
    
   // calculateMonthlyCost();
};//EXIT addEmployee 

//function calculateMonthlyCost() {//ENTER calculateMonthlyCost
//console.log('In CalculateMonthlyCost');

//};//EXIT calculateMonthlyCost