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
    //use the event passed in to stop the default action
    //of page refresh
    let employeeObject = {
        firstName : $('#firstNameIn').val(),
        lastName : $('#lastNameIn').val(),
        iDNumber : $('#iDNumIn').val(),
        jobtitle : $('#jobTitleIn').val(),
        annualSalary : $('#annualSalaryIn').val()
    }
    employeeRoladex.push(employeeObject)
     console.log(employeeObject);
     console.log(employeeRoladex);
     event.preventDefault(event);

};//EXIT addEmployee function

//console.log(addEmployee);
