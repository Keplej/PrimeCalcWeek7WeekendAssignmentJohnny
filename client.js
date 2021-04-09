console.log('Testing');


$(document).ready(onReady);


function onReady() {
    console.log('Clicker test');
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
    calcTester.push(newInformation);

    clearInformation();
}

function clearInformation() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-annual-salary').val('');
}
