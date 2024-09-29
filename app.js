let countdown;  
let seconds;  
const display = document.querySelector('.counter');  
const input = document.getElementById('input');  

document.getElementById('start').onclick = function() {  
    clearInterval(countdown);  
    const minutes = parseInt(input.value);  
    seconds = isNaN(minutes) ? 0 : minutes * 60; 
    startCountdown();  
};  

document.getElementById('stop').onclick = function() {  
    clearInterval(countdown);  
};  

document.getElementById('reset').onclick = function() {  
    clearInterval(countdown);  
    display.textContent = '00:00:00';  
    input.value = '';  
};  

function startCountdown() {  
    countdown = setInterval(() => {  
        if (seconds <= 0) {  
            clearInterval(countdown);  
            display.textContent = 'Time\'s up!';  
            return;  
        }  
        
        seconds--;  
        display.textContent = formatTime(seconds);  
    }, 1000);  
}  

function formatTime(totalSeconds) {  
    const hours = Math.floor(totalSeconds / 3600);  
    const minutes = Math.floor((totalSeconds % 3600) / 60);  
    const remainingSeconds = totalSeconds % 60;  

    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;  
}  

function pad(number) {  
    return number < 10 ? '0' + number : number;  
}