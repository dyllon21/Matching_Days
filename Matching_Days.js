var list = daysList,
    Weekdays, Days, differentDays, Date1, Date2, day1, day2;
daysList = document.getElementById('daysList');
Weekdays = daysList.getElementsByClassName('days');

//if the firstDateInput is changed,this funtion will execute
function FirstDateInput() {
    'use strict';
    //console.log(document.getElementById('selectDate1').value);
    //store the value inside the date input
    Date1 = new Date(document.getElementById('selectDate1').value);

    //get the day 'number' from the date input
    day1 = Date1.getDay();
    // console.log(day1);

    //loop through the elements in the table list
    for (var i = 0; i < Weekdays.length; i++) {
        //stored the looped list
        Days = Weekdays[i];
        //  console.log(Weekdays);
        day1 = Date1.getDay();
        if (day1 === day2 && Days.style.backgroundColor === 'violet') {
            Days.style.backgroundColor = 'green';
        }
        //if the looped list starts with the letter(s) Su and the input items day number is 0(Sunday)
        else if (Days.textContent.startsWith('SU') && day1 === 0) {
            // console.log(Days.textContent);
            // element  color to red
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('M') && day1 === 1) {
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('TU') && day1 === 2) {
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('W') && day1 === 3) {
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('TH') && day1 === 4) {
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('F') && day1 === 5) {
            Days.style.backgroundColor = 'red';
        } else if (Days.textContent.startsWith('SA') && day1 === 6) {
            Days.style.backgroundColor = 'red';
            //if the color of any day element is not red
        } else if (Days.style.backgroundColor != 'violet') {
            Days.style.backgroundColor = 'rgba(0,0,0,0,0)';

        }
    }
}

function SecondDateInput() {
    'use strict';
    //store the value inside the date input
    Date2 = new Date(document.getElementById('selectDate2').value);
    //console.log(document.getElementById('selectDate2').value);
    //get the day 'number' from the date input
    day2 = Date2.getDay();
    //loop through the elements in the table list
    for (var i = 0; i < Weekdays.length; i++) {
        //stored the looped list
        differentDays = Weekdays[i];
        day2 = Date2.getDay();

        if (day1 === day2 && differentDays.style.backgroundColor === 'red') {
            differentDays.style.backgroundColor = 'green';

        } else if (differentDays.textContent.startsWith('SU') && day2 === 0) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.textContent.startsWith('TU') && day2 === 2) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.textContent.startsWith('W') && day2 === 3) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.textContent.startsWith('TH') && day2 === 4) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.textContent.startsWith('F') && day2 === 5) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.textContent.startsWith('SA') && day2 === 6) {
            differentDays.style.backgroundColor = 'skyblue';
        } else if (differentDays.style.backgroundColor != 'red') {
            differentDays.style.backgroundColor = 'rgba(0,0,0,0,0)';
        }
    }
}
