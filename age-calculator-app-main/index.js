// Things to do
/*
Get the input values
When the button is clicked which is a condition
change the values of the years month and days
refresh the values of the form input


*/

// How to get the date?
// 


let date = new Date();
let days = date.getDate();
let current_month = date.getMonth(); // Here the month starts from 0 instead of one.
let current_year = date.getFullYear();
let years_span = document.getElementById("year-value");
let month_span = document.getElementById("month-value");
let day_span = document.getElementById("day-value");
let button = document.querySelector("button");

button.addEventListener('click', function(event){
    event.preventDefault(); // This is used to prevent the form default of submitting and leaving the form empty
    updateDate();
});

function updateDate(){
    let day_input = document.getElementById('day')
    let month_input = document.getElementById('month')
    let year_input = document.getElementById('year')
    let birthday = Number(document.getElementById('day').value);
    let birth_month = Number(document.getElementById('month').value);
    let birth_year = Number(document.getElementById('year').value);
    let day_label = document.getElementById('day-label')
    let month_label = document.getElementById('month-label')
    let year_label = document.getElementById('year-label')
    day_span.innerHTML = days
    // Checking for empty birthday input
    if (birthday === 0){
        let day_error = document.getElementById('day_error')
        day_error.classList.add('validation_error_message')
        day_label.classList.add('label_error_color')
        day_input.classList.add('input_error_color')
    }
    else{
        day_error.classList.remove('validation_error_message')
        day_label.classList.remove('label_error_color')
        day_input.classList.remove('input_error_color')
    }
    // Checking for empty birth_month input
    if (birth_month === 0){
        let month_error = document.getElementById('month_error')
        month_error.classList.add('validation_error_message')
        month_label.classList.add('label_error_color')
        month_input.classList.add('input_error_color')
    }
    else{
        month_error.classList.remove('validation_error_message')
        month_label.classList.remove('label_error_color')
        month_input.classList.remove('input_error_color')
    }
    // Checking for empty birth_year input
    if (birth_year === 0){
        let year_error = document.getElementById('year_error')
        year_error.classList.add('validation_error_message')
        year_label.classList.add('label_error_color')
        year_input.classList.add('input_error_color')
    }
    else{
        year_error.classList.remove('validation_error_message')
        year_label.classList.remove('label_error_color')
        day_input.classList.remove('input_error_color')
    }
    // Calculating age in years and months if form is not empty
    if(birth_month <= current_month){
        years_span.innerHTML = current_year - birth_year;
        month_span.innerHTML = Math.abs(birth_month - current_month);
    } else if (birth_month > current_month + 1) {
        years_span.innerHTML = current_year - (birth_year + 1)
        month_span.innerHTML = Math.abs(12 - (birth_month - current_month));
    }
    
    
}


// Things to do
/*
Find out how to attach a class to an element
If any of the forms are null attach the class validation error message
If all of the forms are empty attach the class validation error message to all the inputs



*/
