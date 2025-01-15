document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");
  const targetDate = new Date("2025-01-30T23:59:59").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdown.innerHTML = "Registration Closed!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `Time left for registration: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  setInterval(updateCountdown, 1000);
});
