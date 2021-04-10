console.log('Testing');

const budget = 0;
let monthlyBudget = [];

$(document).ready(onReady);


function onReady() {
    $('#button-submit').on('click', addingFields);
}

function addingFields() {
    console.log('adding information');
    let newInformation = {
        firstName: $('#in-first-name').val(),
        lastName: $('#in-last-name').val(),
        id: $('#in-id').val(),
        title: $('#in-title').val(),
        annualSalary: $('#in-annual-salary').val()
    };
    monthlyBudget.push(newInformation);
    clearInformation();
    displayEmployees();//showing the employees
    calculateMonthlyBudget();//calculating the monthly budget
}

function clearInformation() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-annual-salary').val('');
}

function calculateMonthlyBudget() {
    console.log('calculate');
    for (let i = 0; i < monthlyBudget.length; i++) {
        budget += (monthlyBudget[i].annualSalary/12);
    }
    let test = $('#monthlyBudgetLeft');
    test.empty();
    test.append(Math.round(budget));
    
    if (budget >= 20000) {//add background color for peramerters 

    }
}

function displayEmployees() {//appending our list
    console.log('Display');
    $('#employeeOutput').empty();
    for (let add of monthlyBudget) {
        $('#emoloyeeOutput').append(`
        <tr class="employeeInformation">
            <td>${add.firstName}</td>
            <td>${add.lastName}</td>
            <td>${add.id}</td>
            <td>${add.title}</td>
            <td>${add.annualSalary}</td>
            <td><button class="delete">Delete<button></td>
        </tr>
        `)//button goes last
    }
}