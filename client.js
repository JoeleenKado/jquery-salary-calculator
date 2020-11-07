console.log('JS is CONNECTED');

$(document).ready(readyNow);

function readyNow() {//ENTER readyNow
    console.log('JQ is READY');
    /*A 'Submit' button, should collect the form information,
    and store the information to calculate monthly costs*/
    $('#submitButton').on('click', addEmployee);
};//EXIT readyNow

const employeeRoladex = [];

function addEmployee() {//ENTER addEmployee function
    let employeeObject = {
        firstName : $('#firstNameIn').val(),
        lastName : $('#lastNameIn').val(),
        iDNumber : $('#iDNumIn').val(),
        jobtitle : $('#jobTitleIn').val(),
        annualSalary : $('#annualSalaryIn').val()
    }
};//EXIT addEmployee function