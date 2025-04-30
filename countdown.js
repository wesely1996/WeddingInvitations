// Set the target date and time
const targetDate = new Date('2024-09-14T16:00:00');

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference
  const timeDifference = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds remaining untill wedding
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days-to-wedding').innerHTML = `${days}`;
  document.getElementById('hours-to-wedding').innerHTML = `${hours}`;
  document.getElementById('minutes-to-wedding').innerHTML = `${minutes}`;
  document.getElementById('seconds-to-wedding').innerHTML = `${seconds}`;

  // Update every second
  setTimeout(updateCountdown, 1000);
}

// Initial call to start the countdown
updateCountdown();