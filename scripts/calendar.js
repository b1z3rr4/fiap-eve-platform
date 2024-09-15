const selectSelected = document.getElementById('select-selected');
const dateSelected = document.getElementById('select-date');
const calendar = document.getElementById('calendar');
const calendarDays = document.getElementById('calendar-days');
const calendarMonthYear = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let selectedDate = '';

function toggleCalendar() {
    calendar.classList.toggle('open');
}

function populateDays() {
    calendarDays.innerHTML = '';

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // quantidade de dias 
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // numero que representa o dia da semana
    // domingo -> 0

    for (let index = 0; index < firstDayOfMonth; index++) {
        calendarDays.innerHTML += '<div class="calendar-day"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const containerDay = document.createElement('div');
        containerDay.classList.add('calendar-day');
        containerDay.textContent = day;

        containerDay.addEventListener('click', () => selectDate(day));
        calendarDays.appendChild(containerDay);
    }

    // setembro - outubro set-out
    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
    calendarMonthYear.textContent = `${monthName} ${currentYear}`;
}

/**
 * 
 * @param {number} day 
 */
function selectDate(day) {
    const month = (currentMonth + 1).toString().padStart(2, '0');
    const dayFormatted = day.toString().padStart(2, '0');

    selectedDate = `${dayFormatted}/${month}/${currentYear}`;

    dateSelected.textContent = `Data: ${selectedDate}`;

    const isDaySelected = selectedDate === `${dayFormatted}/${month}/${currentYear}`;

    if (isDaySelected) {
        selectSelected.classList.add('fulfilled');
    } else {
        selectSelected.classList.remove('fulfilled');
    }

    calendar.classList.remove('open');

    const filterEvent = new CustomEvent('filters', {
        detail: { label: 'dia', value: `${currentYear}-${month}-${dayFormatted}` }
    })

    document.dispatchEvent(filterEvent);

    populateDays();
}

/**
 * 
 * @param {number} direction 
 */
function changeMonth(direction) {
    currentMonth += direction;
    // currentMonth = currentMonth + direction;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    populateDays();
}

selectSelected.addEventListener('click', toggleCalendar);
prevMonthBtn.addEventListener('click', () => changeMonth(-1));
nextMonthBtn.addEventListener('click', () => changeMonth(1));

document.addEventListener('DOMContentLoaded', () => {
    populateDays();
});
