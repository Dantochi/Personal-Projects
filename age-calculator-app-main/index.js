// Things to do
/*
Get the input values
When the button is clicked which is a condition
change the values of the years month and days
refresh the values of the form input


*/


let date = new Date();
let days = 365;
let month = 12;
let current_year = date.getFullYear();
let years_span = document.getElementById("year-value");
let month_span = document.getElementById("month-value");
let day_span = document.getElementById("day-value");
let button = document.querySelector("button");

button.addEventListener('click', function(event){
    event.preventDefault();
    updateDate();
});

function updateDate(){
    let dayFormValue = Number(document.getElementById('day').value);
    let monthFormValue = Number(document.getElementById('month').value);
    let yearFormValue = Number(document.getElementById('year').value);
    years_span.innerHTML = current_year - yearFormValue
    month_span.innerHTML = month - monthFormValue
    day_span.innerHTML = days - dayFormValue
}