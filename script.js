// Countdown Timer Script
const countdownElement = document.getElementById('countdown');
const launchDate = new Date("2025-02-15T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownElement.innerHTML = "Launched!";
    }
}

setInterval(() => {
    updateCountdown();
}, 1000);