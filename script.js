function outputValue() {
    // variables
    let dayInput = document.getElementById('dayInput');
    let monthInput = document.getElementById('monthInput');
    let yearInput = document.getElementById('yearInput');
    let daysOutput = document.getElementById('daysOutput');
    let monthsOutput = document.getElementById('monthsOutput');
    let yearsOutput = document.getElementById('yearsOutput');
    let dayError = document.querySelector('.dayError');
    let monthError = document.querySelector('.monthError');
    let yearError = document.querySelector('.yearError');
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1; // Months are zero-indexed
    let currentDay = new Date().getDate(); // Use getDate() to get the day of the month

    // reset to no error or message on new submission
    document.querySelector('.daySection').classList.remove('error');
    document.querySelector('.monthSection').classList.remove('error');
    document.querySelector('.yearSection').classList.remove('error');
    dayError.innerHTML = '';
    monthError.innerHTML = '';
    yearError.innerHTML = '';

    let valid = true;

    if (dayInput.value === ''){
        dayError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.daySection').classList.add('error');
        valid = false;
    } else if (isNaN(dayInput.value) || dayInput.value < 1 || dayInput.value > 31){
        dayError.innerHTML = "<h3>Must be a valid day</h3>";
        document.querySelector('.daySection').classList.add('error');
        valid = false;
    } else {
        const calcDays = Math.abs(dayInput.value - currentDay);
        daysOutput.innerHTML = calcDays.toString();
    }

    if (monthInput.value === ''){
        monthError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.monthSection').classList.add('error');
        valid = false;
    } else if (isNaN(monthInput.value) || monthInput.value < 1 || monthInput.value > 12){
        monthError.innerHTML = "<h3>Must be a valid Month</h3>";
        document.querySelector('.monthSection').classList.add('error');
        valid = false;
    } else {
        const calcMonths = Math.abs(monthInput.value - currentMonth);
        monthsOutput.innerHTML = calcMonths.toString();
    }

    if (yearInput.value === ''){
        yearError.innerHTML = "<h3>This field is required!</h3>";
        document.querySelector('.yearSection').classList.add('error');
        valid = false;
    } else if (isNaN(yearInput.value) || yearInput.value > currentYear){
        yearError.innerHTML = "<h3>Must be a valid Year</h3>";
        document.querySelector('.yearSection').classList.add('error');
        valid = false;
    } else {
        const calcYears = Math.abs(yearInput.value - currentYear);
        yearsOutput.innerHTML = calcYears.toString();
    }

    // Clear the input fields if all inputs are valid
    if (valid) {
        dayInput.value = '';
        monthInput.value = '';
        yearInput.value = '';
    }
}
