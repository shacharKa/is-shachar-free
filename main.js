const output = document.getElementById("output");
// First shift date (YYYY-MM-DD)
const firstShift = new Date("2025-11-20");
// Today's date (no time)
const today = new Date();
today.setHours(0, 0, 0, 0);

function checkTomorrow()
{
    let date = new Date(today);
    date.setDate(date.getDate() + 1);
    // Calculate difference in days
    const diffDays = difrance(date)
    
    if (isFree(date))
        output.innerText = "YES"
    else
        output.innerText = "NO"
}
function checkDayAfter()
{
    let date = new Date(today);
    date.setDate(date.getDate() + 2);
    // Calculate difference in days
    const diffDays = difrance(date)
    
    if (isFree(date))
        output.innerText = "YES"
    else
        output.innerText = "NO"
}
function checkSelectedDate()
{
    const input = document.getElementById("dateInput").value;
    if (!input) return;  // no date picked

    const date = new Date(input);
    date.setHours(0, 0, 0, 0);

    // Example: check if free
    if (isFree(date)) {
        output.innerText = "YES";
    } else {
        output.innerText = "NO";
    }
}

checkToday()

function checkToday() {

    let date1 = today;
    
    
    if (isFree(date1))
        output.innerText = "YES"
    else
        output.innerText = "NO"
}
function isFree(date)
{
    // Calculate difference in days
    const diffDays = difrance(date)
    // cycle === 0 → shift day
    if (diffDays % 3 === 0) {
        return false;
    } 
    return true;
}
function difrance(date)
{
    // Calculate difference in days
    const diffMs = date - firstShift;
    return diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
}
