const monthInx = new Date().getMonth();
const months= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const monthDisplayed = document.querySelector(".date h1")
const dateDisplayed = document.querySelector(".date p")
const daysEl = document.querySelector(".days")
const lastDay = new Date(new Date().getFullYear(), monthInx+1, 0).getDate()
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay()
 
monthDisplayed.innerText = months[monthInx];
dateDisplayed.innerText = new Date().toDateString();
let i=1;
let k=6;
if (firstDay!=0) k = firstDay-1;
 
let days = ""
 
for (let i=1; i<=k; i++){
    days += `<div class="empty"></div>`
}
 
for (let j=1; j<=lastDay; j++){
    if (j==new Date().getDate()){
        days += `<div class = "currentDate">${i}</div>`
    }
    else{
        days += `<div>${i}</div>`
        i++
    }
}
daysEl.innerHTML = days;
 
console.log(firstDay);
