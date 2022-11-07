let second = document.querySelector('#seconds');
let minuts = document.querySelector('#minuts');
let hours = document.querySelector('#hours');


function Clock() {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    let ml = day.getMilliseconds() * 6;
    console.log(ss);
    hours.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    minuts.style.transform = `rotateZ(${mm+(ss/60)}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
}

setInterval(Clock, 1000);

// Digital Clock

let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let scd = document.querySelector('#scd');
let ampm = document.querySelector('#ampm');

function digitClock() {
    let d = new Date();
    let heures = d.getHours();
    let minutes = d.getMinutes();
    let secondes = d.getSeconds();

    let am = heures >= 12? "PM" : "AM"
     
    // convert 24hr clock tp 12hr clock
    if (heures>12) {
    heures = heures - 12;
   }

    // add zero before single digit number
    secondes = (secondes<10)? "0" + secondes : secondes
    minutes = (minutes<10)? "0" + minutes : minutes
    heures = (heures<10)? "0" + heures : heures

    hr.innerHTML = heures;
    min.innerHTML = minutes;
    scd.innerHTML = secondes;
    ampm.innerHTML = am;

}

setInterval(digitClock, 1000);
