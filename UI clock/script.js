const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
const mod = document.querySelector('.mode');

mod.addEventListener('click', () =>{
    document.querySelector('.mainbox').classList.toggle('dark')
    document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon')
})

setInterval(()=>{
let session = ''
let date = new Date;
let index = date.getDay()
let hours = date.getHours()
let mins = date.getMinutes()
let seconds = date.getSeconds()


let hour = 30 * hours + mins /2;
let min = 6 * mins;
let sec = 6 * seconds
if (hours >= 12){
    session = 'PM'
}
else{
    session = 'AM'
}
// console.log(hours);
document.querySelector('.med').innerHTML = session;
document.querySelector('.day').innerHTML = week[index];
document.querySelector('.hr').style.transform = `rotate(${hour}deg)`;
document.querySelector('.min').style.transform = `rotate(${min}deg)`;
document.querySelector('.sec').style.transform = `rotate(${sec}deg)`;

document.querySelector('#hr').innerHTML = hours 
document.querySelector('#min').innerHTML = mins
document.querySelector('#sec').innerHTML = seconds


},1000)