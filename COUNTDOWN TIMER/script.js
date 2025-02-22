const countdownDate = new Date('July 1, 2024 00:00:00 GMT+00:00').getTime();

const countdownTimer = setInterval(function() {
 
  const now = new Date().getTime();
  
  const distance = countdownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
  
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('timer').innerHTML = '<h2>Countdown Finished!</h2>';
  }
}, 1000);
