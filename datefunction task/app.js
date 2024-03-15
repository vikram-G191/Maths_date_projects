let fun = ()=>{
// let curyear = document.getElementById("dateinput").value ;
let year = new Date();
let newyear = new Date(document.getElementById("dateinput").value);

let years=year.getFullYear() - newyear.getFullYear();
let months = year.getMonth()- newyear.getMonth();
let days = year.getDate()- newyear.getDate();
if(months<0||(months===0&&days<0)){
    years--;
    months+=12;
}
if(days<0){
    months--
    let prevMonthDays = new Date(year.getFullYear(), year.getMonth() - 1, 0).getDate();
    days += prevMonthDays;
}

document.getElementById("year").innerHTML=years;
document.getElementById("month").innerHTML=months;
document.getElementById("day").innerHTML=days;



console.log(years)
console.log(months);
console.log(days);



}